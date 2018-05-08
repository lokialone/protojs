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
export class Element {
    constructor (data) {
        this.root_$origin = data;
    }
    // 方便表示
    static h (tagName, props, children) {
        return {tagName, props, children};
    }
    // 渲染js对象 => 页面tag
    render() {
        let tag = document.createElement(this.tagName);
        tag.setAttribute();
    }
}

export default Element;
