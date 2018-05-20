// 多叉树遍历 dom节点遍历
import h from './element.js';

let tree = h('div', {'class': 'ddd'}, ['hello,tree', h('div', {'class': 'fsf'}, ['secend tree one text', 'second tree', 'three tree'])]);
let tree1 = h('div', {'class': 'ddd'}, ['hello,tree', h('div', {'class': 'fsf'}, ['secend tree one text', 'second tree', 'diffrent tree'])]);
console.log(tree);

