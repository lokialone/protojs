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
        if (typeof v !== 'object' && typeof v !== 'function') newObj[k] = v
        else {
            newObj[k] = Object.prototype.toString.call(v) === '[object Array]' ? [] : {}
            deepCopy(obj[k], newObj[k])
        }
    }
    return newObj
}

console.log(deepCopy(oldObj));