// https://muyiy.vip/question/
/**
 * 想写个简单的diff函数，包含基本类型的diff,
 * number, boolean, symbol,
 * 
 */
function stringDiff(a, b) {

}

function arrayDiff(a, b) {

}

function objectDiff(a, b) {

}


function diff() {

}




// 节流防抖
// 引申知识点:
// arguments, diffrent with arrow function and normal function
// 函数是一等公民, 
// 高阶函数。
function throttle1(fn, delay = 1000) {
    if (fn.lock) return;
    return function() {
        fn.lock = true;
        setTimeout(() => {
            // fn.call(this, ...args);
            fn.call(null, arguments);
            fn.lock = false;    
        }, delay);
    }
}

function throttle(fn, delay = 1000) {
    if (fn.lock) return;
    return (...args) => {
        fn.lock = true;
        setTimeout(() => {
            fn(...args);
            fn.lock = false;
        }, delay);
    }
}

function test1(x, y) {
    console.log('dddddd', x, y);
}

function debounce(fn, delay = 1000) {
    return (...args) => {
        if (fn.tId) clearTimeout(fn.tId);
        fn.tId = setTimeout(() => {
            fn(...args);
            clearTimeout(fn.tId);
        }, delay);
    }
}

// const dd = throttle1(test1);
// dd('hell1', 'dddd');
// dd('hell2', 'dddd');
// dd('hell3', 'dddd');

// const d2 = debounce(test1);
// d2('hell1', 'dddd');
// d2('hell2', 'dddd');
// d2('hell3', 'dddd');

// setTimeout(() => {
//     d2('hell4', 'dddd');
// }, 2000);

/*
set, map, weakSet,weakMap
*/

const testObj = {
    a: 'dddd',
    b: 'wold',
    h: ['1', 'e', 'dd'],
    c: {
        d: 'ddd',
        e: [2, 4, 3, 5],
        f: [3, 4, {g: 'hello'}]
    },
   
}


function isArray(arr) {
    return Array.isArray(arr);
}
/**
 *获取数据的数据类型，
 * return 小写的类型 array , boolean, object, number, string, null, undefined, function 等
 */
function getTypeOf (d) {
	return Object.prototype.toString.call(d).slice(8, -1).toLowerCase()
}
function isPlainObject(d) {
    return getTypeOf(d) === 'object'
}

function DFSclone(obj, newObj = {}) {
    for (let k in obj) {
        let v = obj[k];
        if (typeof v === 'object' && v !== null) {
            newObj[k] = isArray(v) ? [] : {}
            DFSclone(obj[k], newObj[k])
        } else {
            newObj[k] = v;
        }
    }
    return newObj
}
// 感觉不对，有空改
function BFSclone(obj, newObj = {}) {
    for (let k in obj) {
        let v = obj[k];
        if (typeof v !== 'object' || v == null) {
            newObj[k] = v;
        } else {
            newObj[k] = isArray(v) ? [] : {}
            BFSclone(obj[k], newObj[k])
        }
    }
    return newObj
}

function deepCopy(obj) {
    if (isPlainObject(obj)) return DFSclone(obj, {});
    if (isArray(obj)) return DFSclone(obj, []);
    return obj;
}

// console.log(deepCopy(testObj));

// 对象是否环有环

const cycle = {
    hello: "world",
    test: {
        name: 'fff'
    },
    deep: {
        clild: null
    },
    seed: null
}
cycle.seed = 'dddd';
// console.log(cycle);
function isArrayOrObject(v) {
    return typeof v=== 'object' && v!== null;
}

function hasCycle(cycle) {
    function loopItem(obj) {
        for (let k in obj) {
            let v = obj[k]
            if (typeof v === 'object' && v !== null) {
                queue.push(v);
                if (cache.find((item) => item === v)) return true;
                cache.push(v);  
            }
        }
        return false;
    }
    let cache = []
    let queue = []
    let flag = false
    if (loopItem(cycle)) return true;
    while(queue.length) {
        let item = queue.shift();
        flag = loopItem(item); 
        if(flag) return flag;  
    }
    return false;

}
console.log(hasCycle(cycle))

function father() {
    this.faName = 'father';
}
father.prototype.getfaName = function() {
    console.log(this.faName);
};
function child() {
    this.chName = 'child';
}
child.prototype = new father();
child.prototype.constructor = child;
child.prototype.getchName = function() {
    console.log(this.chName);
};
let b = new child();
// b.getchName()
// console.log(b.constructor)
// console.log(b.__proto__)

/** 
 * 以下代码的输出问题
*/

// 有slice 会返回一个 类数组
// 没有 slice会返回一个对象。
var obj = {
    '2': 3,
    '3': 4,
    'length': 0,
    // 'splice': Array.prototype.splice,
    'push': Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log(obj)


var obj1 = {
    length: 1,
    splice: function () {},
}; // Object [empty, splice: ƒ]

var obj2 = {
    length: '1',
    splice: function () {},
}; // {length: "1", splice: ƒ}

var obj3 = {
    length: 1,
    splice: {},
}; // {length: 1, splice: {…}}



