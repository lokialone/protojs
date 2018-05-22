webpack2 发布，宣布支持tree-shaking，webpack 3发布，支持作用域提升，生成的bundle文件更小。 再没有升级webpack之前，增幻想我们的性能又要大幅提升了，对升级充满了期待。实际上事实是这样的升级完之后，bundle文件大小并没有大幅减少，当时有较大的心理落差，然后去研究了为什么效果不理想，原因见 Tree-Shaking性能优化实践 - 原理篇 。优化还是要继续的，虽然工具自带的tree-shaking不能去除太多无用代码，在去除无用代码这一方面也还是有可以做的事情。我们从三个方面做里一些优化。（1）对组件库引用的优化先来看一个问题当我们使用组件库的时候，import {Button} from 'element-ui'，相对于Vue.use(elementUI)，已经是具有性能意识，是比较推荐的做法，但如果我们写成右边的形式，具体到文件的引用，打包之后的区别是非常大的，以antd为例，右边形式bundle体积减少约80%。这个引用也属于有副作用，webpack不能把其他组件进行tree-shaking。既然工具本身是做不了，那我们可以做工具把左边代码自动改成右边代码这种形式。这个工具antd库本身也是提供的。我在antd的工具基础上做了少量的修改，不用任何配置，原生支持我们自己的组件库， wui 和 xcui 以及一些其他常用的库babel-plugin-import-fix ，缩小引用范围lin-xi/babel-plugin-import-fix下面介绍一下原理这是一个babel的插件，babel通过核心babylon将ES6代码转换成AST抽象语法树，然后插件遍历语法树找出类似import {Button} from 'element-ui'这样的语句，进行转换，最后重新生成代码。babel-plugin-import-fix默认支持antd，element，meterial-UI，wui，xcui和d3，只需要再.babelrc中配置插件本身就可以。.babelrc{
  "presets": [
    ["es2015", { "modules": false }], "react"
  ],
  "plugins": ["import-fix"]
}
其实是想把所有常用的库都默认支持，但很多常用的库却不支持缩小引用范围。因为没有独立输出各个子模块，不能把引用修改为对单个子模块的引用。（2）CSS Tree-shaking我们前面所说的tree-shaking都是针对js文件，通过静态分析，尽可能消除无用的代码，那对于css我们能做tree-shaking吗？随着CSS3，LESS，SASS等各种css预处理语言的普及，css文件在整个工程中占比是不可忽视的。随着大项目功能的不停迭代，导致css中可能就存在着无用的代码。我实现了一个webpack插件来解决这个问题，找出css代码无用的代码。webpack-css-treeshaking-plugin，对css进行tree-shakingwebpack-css-treeshaking-plugin下面介绍一下原理整体思路是这样的，遍历所有的css文件中的selector选择器，然后去所有js代码中匹配，如果选择器没有在代码出现过，则认为该选择器是无用代码。首先面临的问题是，如何优雅的遍历所有的选择器呢？难道要用正则表达式很苦逼的去匹配分割吗？babel是js世界的福星，其实css世界也有利器，那就是postCss。PostCSS 提供了一个解析器，它能够将 CSS 解析成AST抽象语法树。然后我们能写各种插件，对抽象语法树做处理，最终生成新的css文件，以达到对css进行精确修改的目的。整体又是一个webpack的插件，架构图如下：主要流程：插件监听webapck编译完成事件，webpack编译完成之后，从compilation中找出所有的css文件和js文件apply (compiler) {
    compiler.plugin('after-emit', (compilation, callback) => {

      let styleFiles = Object.keys(compilation.assets).filter(asset => {
        return /\.css$/.test(asset)
      })

      let jsFiles = Object.keys(compilation.assets).filter(asset => {
        return /\.(js|jsx)$/.test(asset)
      })

     ....
}
将所有的css文件送至postCss处理，找出无用代码   let tasks = []
    styleFiles.forEach((filename) => {
        const source = compilation.assets[filename].source()
        let listOpts = {
          include: '',
          source: jsContents,  //传入全部js文件
          opts: this.options   //插件配置选项
        }
        tasks.push(postcss(treeShakingPlugin(listOpts)).process(source).then(result => {       
          let css = result.toString()  // postCss处理后的css AST  
          //替换webpack的编译产物compilation
          compilation.assets[filename] = {
            source: () => css,
            size: () => css.length
          }
          return result
        }))
    })
postCss 遍历，匹配，删除过程 module.exports = postcss.plugin('list-selectors', function (options) {
    // 从根节点开始遍历
    cssRoot.walkRules(function (rule) {
      // Ignore keyframes, which can log e.g. 10%, 20% as selectors
      if (rule.parent.type === 'atrule' && /keyframes/.test(rule.parent.name)) return
      
      // 对每一个规则进行处理
      checkRule(rule).then(result => {
        if (result.selectors.length === 0) {
          // 选择器全部被删除
          let log = ' ✂️ [' + rule.selector + '] shaked, [1]'
          console.log(log)
          if (config.remove) {
            rule.remove()
          }
        } else {
          // 选择器被部分删除
          let shaked = rule.selectors.filter(item => {
            return result.selectors.indexOf(item) === -1
          })
          if (shaked && shaked.length > 0) {
            let log = ' ✂️ [' + shaked.join(' ') + '] shaked, [2]'
            console.log(log)
          }
          if (config.remove) {
            // 修改AST抽象语法树
            rule.selectors = result.selectors
          }
        }
      })
    })
checkRule 处理每一个规则核心代码let checkRule = (rule) => {
      return new Promise(resolve => {
        ...
        let secs = rule.selectors.filter(function (selector) {
          let result = true
          let processor = parser(function (selectors) {
            for (let i = 0, len = selectors.nodes.length; i < len; i++) {
              let node = selectors.nodes[i]
              if (_.includes(['comment', 'combinator', 'pseudo'], node.type)) continue
              for (let j = 0, len2 = node.nodes.length; j < len2; j++) {
                let n = node.nodes[j]
                if (!notCache[n.value]) {
                  switch (n.type) {
                    case 'tag':
                      // nothing
                      break
                    case 'id':
                    case 'class':
                      if (!classInJs(n.value)) {
                        // 调用classInJs判断是否在JS中出现过
                        notCache[n.value] = true
                        result = false
                        break
                      }
                      break
                    default:
                      // nothing
                      break
                  }
                } else {
                  result = false
                  break
                }
              }
            }
          })
          ...
        })
        ...
      })
    }
可以看到其实我只处理里 id选择器和class选择器，id和class相对来说副作用小，引起样式异常的可能性相对较小。判断css是否再js中出现过，是使用正则匹配。其实，后续还可以继续优化，比如对tag类的选择器，可以配置是否再html，jsx，template中出现过，如果出现过，没有出现过也可以认为是无用代码。当然，插件能正常工作还是的有一些前提和约束。我们可以在代码中动态改变css，比如再react和vue中，可以这么写这样是比较推荐的方式，选择器作为字符或变量名出现在代码中，下面这样动态生成选择器的情况就会导致匹配失败render(){
  this.stateClass = 'state-' + this.state == 2 ? 'open' : 'close'
  return <div class={this.stateClass}></div>
}
其中这样情况很容易避免render(){
  this.stateClass = this.state == 2 ? 'state-open' : 'state-close'
  return <div class={this.stateClass}></div>
}
所以有一个好的编码规范的约束，插件能更好的工作。（3）webpack bundle文件去重如果webpack打包后的bundle文件中存在着相同的模块，也属于无用代码的一种。也应该被去除掉首先我们需要一个能对bundle文件定性分析的工具，能发现问题，能看出优化效果。webpack-bundle-analyzer这个插件完全能满足我们的需求，他能以图形化的方式展示bundle中所有的模块的构成的各构成的大小。其次，需求对通用模块进行提取，CommonsChunkPlugin是最被人熟知的用于提供通用模块的插件。早期的时候，我并不完全了解他的功能，并没有发挥最大的功效。下面介绍CommonsChunkPlugin的正确用法自动提取所有的node_moudles或者引用次数两次以上的模块minChunks可以接受一个数值或者函数，如果是函数，可自定义打包规则但使用上面记载的配置之后，并不能高枕无忧。因为这个配置只能提取所有entry打包后的文件中的通用模块。而现实是，有了提高性能，我们会按需加载，通过webpack提供的import（...）方法，这种按需加载的文件并不会存在于entry之中，所以按需加载的异步模块中的通用模块并没有提取。如何提取按需加载的异步模块里的通用模块呢？配置另一个CommonsChunkPlugin，添加async属性，async可以接受布尔值或字符串。当时字符串时，默认是输出文件的名称。names是所有异步模块的名称这里还涉及一个给异步模块命名的知识点。我是这样做的：const Edit = resolve => { import( /* webpackChunkName: "EditPage" */ './pages/Edit/Edit').then((mod) => { resolve(mod.default); }) };
const PublishPage = resolve => { import( /* webpackChunkName: "Publish" */ './pages/Publish/Publish').then((mod) => { resolve(mod); }) };
const Models = resolve => { import( /* webpackChunkName: "Models" */ './pages/Models/Models').then((mod) => { resolve(mod.default); }) };
const MediaUpload = resolve => { import( /* webpackChunkName: "MediaUpload" */ './pages/Media/MediaUpload').then((mod) => { resolve(mod); }) };
const RealTime = resolve => { import( /* webpackChunkName: "RealTime" */ './pages/RealTime/RealTime').then((mod) => { resolve(mod.default); }) };
没错，在import里添加注释。/* webpackChunkName: "EditPage" */ ，虽然看着不舒服，但是管用。贴一个项目的优化效果对比图优化效果还是比较明显。优化前bundle优化后bundle最后思考一个问题：不同entry模块或按需加载的异步模块需不需要提取通用模块？这个需要看场景了，比如模块都是在线加载的，如果通用模块提取粒度过小，会导致首页首屏需要的文件变多，很多可能是首屏用不到的，导致首屏过慢，二级或三级页面加载会大幅提升。所以这个就需要根据业务场景做权衡，控制通用模块提取的粒度。百度外卖的移动端应用场景是这样的，我们所有的移动端页面都做了离线化的处理。离线之后，加载本地的js文件，与网络无关，基本上可以忽略文件大小，所以更关注整个离线包的大小。离线包越小，耗费用户的流量就越小，用户体验更好，所以离线化的场景是非常适合最小粒提取通用模块的，即将所有entry模块和异步加载模块的引用大于2的模块都提取，这样能获得最小的输出文件，最小的离线包。

作者：百度外卖大前端技术团队
链接：https://juejin.im/post/5a4dca1d518825128654fa78
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。