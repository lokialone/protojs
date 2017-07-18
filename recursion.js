//阶乘
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// console.log(factorial(4));

function Fibonacci(n) {
    if (n <= 1) return n;
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

// console.log(Fibonacci(3));

let oldObj = { name: 'lokia', name2: 'lokiaaa', names: { name1: 'lokia', name2: 'lokiaaa' }, scores: [1, 2, 3, 4, 5], score: { name: [1, 3, .4, 5], hell0: 'dddd' } }
//es6 use babel-node run script
function deepCopy(obj, newObj = {}) {
    for (let k in obj) {
        let v = obj[k];
        if (typeof v === 'object') {
            newObj[k] = Object.prototype.toString.call(v) === '[object Array]' ? [] : {}
            deepCopy(obj[k], newObj[k])
        }
        else {
            newObj[k] = v;
        }
    }
    return newObj
}

//es5 

function deepCopy_es5(obj, newObj) {
    var newObj = newObj || {}
    for (let k in obj) {
        let v = obj[k];
        if (typeof v === 'object') {
            newObj[k] = Object.prototype.toString.call(v) === '[object Array]' ? [] : {}
            deepCopy(obj[k], newObj[k])
        }
        else {
            newObj[k] = v
        }
    }
    return newObj
}
// console.log(deepCopy_es5(oldObj))

//version版本比较

let v1 = '1.2.40'
let v2 = '1.3.15'
// 返回gt > lt < eq =
function compareVersion(v1, v2) {
    let a1 = v1.split('.')
    let a2 = v2.split('.')
    let loop = a1.length <= a2.length ? a1.length : a2.length
    for (let i = 0; i < loop; i++) {
        if (a1[i] === a2[i]) continue
        else
            return a1[i] > a2[i] ? 'gt' : 'lt'
    }
    if (a1.length === a2.length) return 'eq'
    return a1.length > a2.length ? 'gt' : 'lt'
}

console.log(compareVersion(v1, v2));