// 节流函数
// xms内连续调用n次，只回应最后一次
function debounce(method, context) {
    clearTimeout(method.tId);
    method.tId = setTimeout(function(){
        method.call(context);
    }, 100);
}

// export class debounceClass {
//     constructor(method) {
//         this.fn = method;
//     }

//     do () {
//         clearTimeout(this.fn.id);
//         this.fn.id = setTimeout(() => {
//             this.fn.call();
//         }, 800);
//     }
// }

// export class debounceClassArray {
//     constructor() {
//         this.fns = [];
//     }
//     // 初始化需要节流的函数，并返回函数的唯一标识符
//     create (method) {
//         let repeat = false;
//         let id = '';
//         // 去重，同名函数直接覆盖
//         this.fns.forEach((item) => {
//             if (item.name === method.name) {
//                 repeat = true;
//                 id = uuidv1();
//                 item = { name: method.name, id: id, method: method };
//             }
//         });
//         if (repeat) return id;
//         id = uuidv1();
//         this.fns.push({ name: method.name, id: id, method: method });
//         return id;
//     }
//     // 根据id执行函数
//     do (id) {
//         let fn = this.fns.find(item => item.id === id);
//         if (!fn) throw new Error('该函数不存在');
//         clearTimeout(fn.tid);
//         fn.tid = setTimeout(() => {
//             fn.method.call();
//         }, 800);
//     }
// }
// 先调用一次，xms后开始继续响应
function throttle(method, context) {
    if (method.lock) return;
    method.lock = true;
    method.call(context);
    setTimeout(() => {
        method.lock = false;
    }, 100);
}


var i = 0;
function log() {
    console.log('i', i);
}
// i++
// debounce(log);
// i++
// debounce(log);
// i++
// debounce(log);
i++
throttle(log);
i++
throttle(log);
i++
throttle(log);

