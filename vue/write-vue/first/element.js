/**  实现 js对象生成 html节点
 * 例如将以下element => html
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
*/

export function h(tagName, props, children) {
    return { tagName, props, children }; 
}

export function renderTextNode(text, parent) {
    let txt = document.createTextNode(text);
    parent.appendChild(txt);
}
// root为根节点
export function render(data, root, parent) {
    if (!root) root = document.createElement('div');
    let tag = document.createElement(data.tagName);
    let props = data.props;
    for (var prop in props) {
        if (props.hasOwnProperty(prop)) {
            tag.setAttribute(prop, props[prop]);
        }
    } 
    !parent ? root.appendChild(tag) : parent.appendChild(tag);
    if (data.children) {
        data.children.forEach((item) => {
            // 这里的判断做的不是很好，只是单纯区分是否为文字节点
            if (typeof item === 'string') {
                renderTextNode(item, tag);
            } else {
                render(item, root, tag);
            }
        });    
    } else {
        document.body.appendChild(root);
        return;
    }  
}

function Element (tagName, props, children){
    this.tagName = tagName
    this.props = props
    this.children = children
}

Element.prototype.render = function() {
    var el = document.createElement(this.tagName) // 根据tagName构建
    var props = this.props

    for (var propName in props) { // 设置节点的DOM属性
        var propValue = props[propName]
        el.setAttribute(propName, propValue)
    }

    var children = this.children || []

    children.forEach(function (child) {
        var childEl = (child instanceof Element)
        ? child.render() // 如果子节点也是虚拟DOM，递归构建DOM节点
        : document.createTextNode(child) // 如果字符串，只构建文本节点
        el.appendChild(childEl)
    })

    return el
}

class ElementClass {
    constructor(tagName, props, children) {
        this.tagName = tagName
        this.props = props
        this.children = children
    }

    render () {
        var el = document.createElement(this.tagName) // 根据tagName构建
        var props = this.props
        for (var propName in props) { // 设置节点的DOM属性
            var propValue = props[propName]
            el.setAttribute(propName, propValue)
        }

        var children = this.children || []
        
        children.forEach(function (child) {
            console.log(child);
            var childEl = (child instanceof ElementClass)
            ? child.render() // 如果子节点也是虚拟DOM，递归构建DOM节点
            : document.createTextNode(child) // 如果字符串，只构建文本节点
            el.appendChild(childEl)
        })

        return el
    }
}
  
export default (tagName, props, children) => {
    return new ElementClass(tagName, props, children);
}



