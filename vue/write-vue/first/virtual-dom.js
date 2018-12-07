import h from './element';


let data = h('div', {'class': 'test'}, ['hello', h('div', {'id': 'ddd'}), h('p', {'class': 'hellp'}, ['world'])]);
// render(data);
let test = document.getElementById('test');
test.appendChild(data.render());
