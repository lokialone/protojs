
 # 基础知识：Object.defineProperty，观察者模式，Watcher，Dep 以及 Observer 类。
 ## Object.defineProperty(obj, prop, descriptor)
会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。

对象里目前存在的属性描述符有两种主要形式：数据描述符和存取描述符。数据描述符是一个具有值的属性，该值可能是可写的，也可能不是可写的。存取描述符是由getter-setter函数对描述的属性。描述符必须是这两种形式之一；不能同时是两者。

数据描述符和存取描述符都有的
configurable
    当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。
enumerable
    当且仅当该属性的enumerable为true时，该属性才能够出现在对象的枚举属性中。默认为 false。


value writable 和get set 无法同时使用
// 数据描述符和存取描述符不能混合使用
Object.defineProperty(o, "conflict", {
  value: 0x9f91102, 
  get: function() { 
    return 0xdeadbeef; 
  } 
});

// 在对象中添加一个属性与存取描述符的示例
var bValue;
Object.defineProperty(o, "b", {
  get : function(){
    return bValue;
  },
  set : function(newValue){
    bValue = newValue;
  },
  enumerable : true,
  configurable : true
});


## 观察者模式

观察者模式是软件设计模式的一种。在此种模式中，一个目标对象管理所有相依于它的观察者对象，并且在它本身的状态改变时主动发出通知。这通常透过呼叫各观察者所提供的方法来实现。此种模式通常被用来实时事件处理系统。

订阅者模式涉及三个对象：发布者、主题对象、订阅者，三个对象间的是一对多的关系，每当主题对象状态发生改变时，其相关依赖对象都会得到通知，并被自动更新。

function Dep() {//主题对象
  this.subs = []; //订阅者列表
}
Dep.prototype.notify = function() { //主题对象通知订阅者
  this.subs.forEach(function(sub){ //遍历所有的订阅者，执行订阅者提供的更新方法
    sub.update();
  });
}
function Sub(x) { //订阅者
  this.x = x;
}
Sub.prototype.update = function() { //订阅者更新
  this.x = this.x + 1;
  console.log(this.x);
}
var pub = { //发布者
  publish: function() {
    dep.notify();
  }
};
var dep = new Dep(); //主题对象实例
Array.prototype.push.call(dep.subs, new Sub(1), new Sub(2), new Sub(4)); //新增 3 个订阅者
pub.publish(); //发布者发布更新
// 2
// 3
// 5

## virtual dom

### 为什么使用virtual dom
https://www.codecademy.com/articles/react-virtual-dom
DOM manipulation slower than most JavaScript operations.

### dom 操作成功高在哪
https://mp.weixin.qq.com/s/NrZr4lelPs6RFn0aiyGKsQ
dom 操作成功高在哪

### virtual dom 算法
库 https://github.com/snabbdom/snabbdom

50行代码实现virtual dom
https://www.jianshu.com/p/cbb7d7094fb9

如何实现一个 Virtual DOM 算法
https://github.com/livoras/blog/issues/13

https://foio.github.io/virtual-dom/

virtual-dom原理与简单实现
https://juejin.im/post/5a21621af265da4304066c8d


var element = {
    tagName: 'ul', // 节点标签名
    props: { // dom的属性键值对
        id: 'list'
    },
    children: [
        {tagName: 'li', props: {class: 'item'}, children: ["Item 1"]},
        {tagName: 'li', props: {class: 'item'}, children: ["Item 2"]},
        {tagName: 'li', props: {class: 'item'}, children: ["Item 3"]}
    ]
}
 ==>
<ul id="list">
<li class="item">Item 1</li>
<li class="item">Item 2</li>
<li class="item">Item 3</li>
</ul>

function Element(tagName, props, children) {
    this.tagName = tagName
    this.props = props
    this.children = children
}

var ul = new Element('ul', {id: 'list'}, [
    {tagName: 'li', props: {class: 'item'}, children: ["Item 1"]},
    {tagName: 'li', props: {class: 'item'}, children: ["Item 2"]},
    {tagName: 'li', props: {class: 'item'}, children: ["Item 3"]}
])
// render函数渲染
Element.prototype.render = function() {
    let el = document.createElement(this.tagName), // 节点名称
        props = this.props // 节点属性

    for (var propName in props) {
        propValue = props[propName]
        el.setAttribute(propName, propValue)
    }

    this.children.forEach((child) => {
        var childEl = (child instanceof Element)
            ? child.render()
            : document.createTextNode(child)
        el.appendChild(childEl)
    })
    return el
}
### virtual dom 自我实践
1. 使用js表示dom

<ul class="list">
  <li>item 1</li>
  <li>item 2</li>
</ul>
 ==>
{ type: 'ul', props: { 'class': 'list' }, children: [
  { type: 'li', props: {}, children: ['item 1'] },
  { type: 'li', props: {}, children: ['item 2'] }
] }
<!-- 仅仅是为了方便表示 -->
function h(type, props, ...children) {
  return {
    type,
    props,
    children
  }
}

h('ul', { 'class': 'list' },
  h('li', {}, 'item 1'),
  h('li', {}, 'item 2'),
)

#### shadow dom


## 自己实现一个类vue的库
https://github.com/fastCreator/MVVM