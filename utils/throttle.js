// 节流函数
function throttle(method, context) {
    console.log(context);
    clearTimeout(method.tId);
    method.tId = setTimeout(function(){
        method.call(context);
    }, 100);
}

export class ThrottleClass {
    constructor(method) {
        this.fn = method;
    }

    do () {
        clearTimeout(this.fn.id);
        this.fn.id = setTimeout(() => {
            this.fn.call();
        }, 800);
    }
}

export class ThrottleClassArray {
    constructor() {
        this.fns = [];
    }
    // 初始化需要节流的函数，并返回函数的唯一标识符
    create (method) {
        let repeat = false;
        let id = '';
        // 去重，同名函数直接覆盖
        this.fns.forEach((item) => {
            if (item.name === method.name) {
                repeat = true;
                id = uuidv1();
                item = { name: method.name, id: id, method: method };
            }
        });
        if (repeat) return id;
        id = uuidv1();
        this.fns.push({ name: method.name, id: id, method: method });
        return id;
    }
    // 根据id执行函数
    do (id) {
        let fn = this.fns.find(item => item.id === id);
        if (!fn) throw new Error('该函数不存在');
        clearTimeout(fn.tid);
        fn.tid = setTimeout(() => {
            fn.method.call();
        }, 800);
    }
}

var i = 1;
function test() {
    console.log(i);
    i++;
}

throttle(test);
throttle(test);
console.log('2222');
throttle(test);
throttle(test);
setTimeout(() => {
    test();
}, 1000);
