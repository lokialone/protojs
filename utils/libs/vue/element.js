//实现 js对象生成 html节点
// var element = {
//     tagName: 'ul', // 节点标签名
//     props: { // dom的属性键值对
//         id: 'list'
//     },
//     children: [
//         {tagName: 'li', props: {class: 'item'}, children: ["Item 1"]},
//         {tagName: 'li', props: {class: 'item'}, children: ["Item 2"]},
//         {tagName: 'li', props: {class: 'item'}, children: ["Item 3"]}
//     ]
// }
//  ==>
// <ul id="list">
// <li class="item">Item 1</li>
// <li class="item">Item 2</li>
// <li class="item">Item 3</li>
// </ul>

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