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

function loopArray(key, arr, res) {
   
    for(let i = 0; i < arr.length; i++) {
        loop(arr[i], key, res[key]);
    }
}

function loopObject(obj, res) {
    let keys = Object.keys(obj);
    for(let i = 0; i < keys.length; i++) {
        let key = keys[i];
        res[key] = {}
        loop(obj[key], key, res[key]);
    }
}

// function loop(obj,key = '*', res = {}) {
//     if (isArray(obj)) {
//         res[key] = [];
//         loopArray(obj, res[key], 'array');
//     } else if (isPlainObject(obj)) {
//         loopObject(obj,res);
//     // } else {
//     //     if ()
//     // }
//     console.log('res', res);
// }


function deepCopy(obj, newObj = {}) {
    for (let k in obj) {
        let v = obj[k];
        if (typeof v === 'object') {
            newObj[k] = Object.prototype.toString.call(v) === '[object Array]' ? [] : {}
            deepCopy(obj[k], newObj[k])
        } else {
            newObj[k] = v;
        }
    }
    return newObj
}
let newObj = deepCopy(testObj);
console.log(newObj);
console.log(newObj.c === testObj.c)
