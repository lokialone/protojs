一. 什么是Tree-shaking


先来看一下Tree-shaking原始的本意

上图形象的解释了Tree-shaking 的本意，本文所说的前端中的tree-shaking可以理解为通过工具"摇"我们的JS文件，将其中用不到的代码"摇"掉，是一个性能优化的范畴。具体来说，在 webpack 项目中，有一个入口文件，相当于一棵树的主干，入口文件有很多依赖的模块，相当于树枝。实际情况中，虽然依赖了某个模块，但其实只使用其中的某些功能。通过 tree-shaking，将没有使用的模块摇掉，这样来达到删除无用代码的目的。

Tree-shaking 较早由 Rich_Harris 的 rollup 实现，后来，webpack2 也增加了tree-shaking 的功能。其实在更早，google closure compiler 也做过类似的事情。三个工具的效果和使用各不相同，使用方法可以通过官网文档去了解，三者的效果对比，后文会详细介绍。

二. tree-shaking的原理


Tree-shaking的本质是消除无用的js代码。无用代码消除在广泛存在于传统的编程语言编译器中，编译器可以判断出某些代码根本不影响输出，然后消除这些代码，这个称之为DCE（dead code elimination）。

Tree-shaking 是 DCE 的一种新的实现，Javascript同传统的编程语言不同的是，javascript绝大多数情况需要通过网络进行加载，然后执行，加载的文件大小越小，整体执行时间更短，所以去除无用代码以减少文件体积，对javascript来说更有意义。

Tree-shaking 和传统的 DCE的方法又不太一样，传统的DCE 消灭不可能执行的代码，而Tree-shaking 更关注宇消除没有用到的代码。下面详细介绍一下DCE和Tree-shaking。

（1）先来看一下DCE消除大法

Dead Code 一般具有以下几个特征

•代码不会被执行，不可到达

•代码执行的结果不会被用到

•代码只会影响死变量（只写不读）

下面红框标示的代码就属于死码，满足以上特征

传统编译型的语言中，都是由编译器将Dead Code从AST（抽象语法树）中删除，那javascript中是由谁做DCE呢？

首先肯定不是浏览器做DCE，因为当我们的代码送到浏览器，那还谈什么消除无法执行的代码来优化呢，所以肯定是送到浏览器之前的步骤进行优化。

其实也不是上面提到的三个工具，rollup，webpack，cc做的，而是著名的代码压缩优化工具uglify，uglify完成了javascript的DCE，下面通过一个实验来验证一下。

以下所有的示例代码都能在我们的github中找到，欢迎戳❤
github.com/lin-xi/tree… 

分别用rollup和webpack将图4中的代码进行打包 

中间是rollup打包的结果，右边是webpack打包的结果

可以发现，rollup将无用的代码foo函数和unused函数消除了，但是仍然保留了不会执行到的代码，而webpack完整的保留了所有的无用代码和不会执行到的代码。

分别用rollup + uglify和 webpack + uglify 将图4中的代码进行打包

中间是配置文件，右侧是结果

可以看到右侧最终打包结果中都去除了无法执行到的代码，结果符合我们的预期。

(2) 再来看一下Tree-shaking消除大法

前面提到了tree-shaking更关注于无用模块的消除，消除那些引用了但并没有被使用的模块。

先思考一个问题，为什么tree-shaking是最近几年流行起来了？而前端模块化概念已经有很多年历史了，其实tree-shaking的消除原理是依赖于ES6的模块特性。


ES6 module 特点：

只能作为模块顶层的语句出现
import 的模块名只能是字符串常量
import binding 是 immutable的
ES6模块依赖关系是确定的，和运行时的状态无关，可以进行可靠的静态分析，这就是tree-shaking的基础。

所谓静态分析就是不执行代码，从字面量上对代码进行分析，ES6之前的模块化，比如我们可以动态require一个模块，只有执行后才知道引用的什么模块，这个就不能通过静态分析去做优化。

这是 ES6 modules 在设计时的一个重要考量，也是为什么没有直接采用 CommonJS，正是基于这个基础上，才使得 tree-shaking 成为可能，这也是为什么 rollup 和 webpack 2 都要用 ES6 module syntax 才能 tree-shaking。

我们还是通过例子来详细了解一下

面向过程编程函数和面向对象编程是javascript最常用的编程模式和代码组织方式，从这两个方面来实验：

函数消除实验
类消除实验
先看下函数消除实验

utils中get方法没有被使用到，我们期望的是get方法最终被消除。


注意，uglify目前不会跨文件去做DCE，所以上面这种情况，uglify是不能优化的。

先看看rollup的打包结果


完全符合预期，最终结果中没有get方法

再看看webpack的结果


也符合预期，最终结果中没有get方法

可以看到rollup打包的结果比webpack更优化

函数消除实验中，rollup和webpack都通过，符合预期
再来看下类消除实验

增加了对menu.js的引用，但其实代码中并没有用到menu的任何方法和变量，所以我们的期望是，最终代码中menu.js里的内容被消除


main.js

menu.js
rollup打包结果


包中竟然包含了menu.js的全部代码

webpack打包结果


包中竟然也包含了menu.js的全部代码

类消除实验中，rollup，webpack 全军覆没，都没有达到预期

what happend？
这跟我们想象的完全不一样啊？为什么呢？无用的类不能消除，这还能叫做tree-shaking吗？我当时一度怀疑自己的demo有问题，后来各种网上搜索，才明白demo没有错。

下面摘取了rollup核心贡献者的的一些回答：

rollup只处理函数和顶层的import/export变量，不能把没用到的类的方法消除掉
javascript动态语言的特性使得静态分析比较困难
图7下部分的代码就是副作用的一个例子，如果静态分析的时候删除里run或者jump，程序运行时就可能报错，那就本末倒置了，我们的目的是优化，肯定不能影响执行
再举个例子说明下为什么不能消除menu.js，比如下面这个场景

function Menu() {
}

Menu.prototype.show = function() {
}

Array.prototype.unique = function() {
    // 将 array 中的重复元素去除
}

export default Menu;

如果删除里menu.js，那对Array的扩展也会被删除，就会影响功能。那也许你会问，难道rollup，webpack不能区分是定义Menu的proptotype 还是定义Array的proptotype吗？当然如果代码写成上面这种形式是可以区分的，如果我写成这样呢？

function Menu() {
}

Menu.prototype.show = function() {
}

var a = 'Arr' + 'ay'
var b
if(a == 'Array') {
    b = Array
} else {
    b = Menu
}

b.prototype.unique = function() {
    // 将 array 中的重复元素去除
}

export default Menu;

这种代码，静态分析是分析不了的，就算能静态分析代码，想要正确完全的分析也比较困难。