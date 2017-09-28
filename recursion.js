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

let oldObj = {
    name: 'lokia',
    name2: 'lokiaaa',
    names: {
        name1: 'lokia',
        name2: 'lokiaaa'
    },
    scores: [1, 2, 3, 4, 5],
    score: {
        name: [1, 3, .4, 5],
        hell0: 'dddd'
    }
}
//es6 use babel-node run script
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

//es5 

function deepCopy_es5(obj, newObj) {
    var newObj = newObj || {}
    for (let k in obj) {
        let v = obj[k];
        if (typeof v === 'object') {
            newObj[k] = Object.prototype.toString.call(v) === '[object Array]' ? [] : {}
            deepCopy(obj[k], newObj[k])
        } else {
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

// console.log(compareVersion(v1, v2));

//二叉树遍历
let tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4
        },
        right: {
            value: 5
        }
    },
    right: {
        value: 3
    }
}
//先序
function preorder(tree) {
    console.log(tree.value)
    if (tree.left) preorder(tree.left)
    if (tree.right) preorder(tree.right)
}

// preorder(tree)
//中序
function inOrder(tree) {
    if (tree.left) preorder(tree.left)
    console.log(tree.value)
    if (tree.right) preorder(tree.right)
}

// inOrder(tree);
//后序
function postOrder(tree) {
    if (tree.left) preorder(tree.left)
    if (tree.right) preorder(tree.right)
    console.log(tree.value)
}
//全排列
//一开始是因为想把全排列问题解决，才开始想再深入学习一下递归的
//开始挑战全排列
//递归的解决思路：从第一位开始依次与后一位交互位置

// 春岩版全排列
function fullArray(arr) {
    var ret = [];
    if (arr.length > 1) {
        arr.forEach(function (element, index) {
            var narr = arr.slice(0);
            narr.splice(index, 1);
            fullArray(narr).forEach(function (ele, ind) {
                ret.push(element + ele);
            });
        }, this);
    } else {
        ret = arr;
    }
    return ret;
}
// console.log(fullArray('1234'.split('')));
// 树的遍历
//深搜

function perm(arr, narr) {
    if (narr.length === 0) {
        narr.push(arr[0]);
        arr.splice(0, 1);
    }
    if (narr.length === arr.length) {
        console.log('narr', narr);
    } else {
        console.log('ok');

        narr.forEach(function (ele, index) {
            console.log(index, ele);
            arr.splice(0, 1);
            narr.splice(index, 0, arr[0]);
            perm(arr, narr.splice(index, 0, arr[0]));
        });
    }
}


// console.log(perm([1, 2], []));

//将数组铺平
//todo
// let arr_23 = [1,3, [1,2], [1,3,5[1,3]]];

//数据全排列
// 1234  2134 3124 4231

function swap(arr, from, to){
    let newArr = [];
    arr.forEach(item => {
        newArr.push(item);
    });
    let tmp = newArr[from];
    newArr[from] = newArr[to];
    newArr[to] = tmp;
    return newArr;
}

function fullPerm (arr, index) {
    for(let j = index, len = arr.length; j < len ; j++) {
        let narr = swap(arr, index, j);
        if (j !== index || index === 0) {
            console.log(narr);
        }
        fullPerm(narr, index + 1);
    }  
}

fullPerm([1,2,3], 0);
