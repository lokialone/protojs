import {h, render} from './element';


let data = h('div', {'class': 'test'}, [h('div', {'id': 'ddd'}), h('p', {'class': 'hellp'}, ['hello'])]);
render(data);

let test = document.getElementById('test');
console.log(test.childElementCount);
