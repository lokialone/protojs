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
            newObj[k] = v;
        }
    }
    return newObj
}
console.log(deepCopy_es5(oldObj));