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

// console.log(compareVersion(v1, v2));

//二叉树遍历
let tree = { value: 1, left: { value: 2, left: { value: 4 }, right: { value: 5 } }, right: { value: 3 } }
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
function swap(str, i, j) {
    var arr = str.split('');
    if (!arr) return;
    if (arr.length < i + 1)
        return;
    var temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
    return arr.join('');
}

function swapSibling(str, i) {
    return swap(str, i, i++);
}
//全排列version1
function VerRange(str, index) {
    console.log(str);
    var len = str.length;
    var nstr = swapSibling(str, index);
    if (index + 1 < len) VerRange(nstr, ++index);

}


function allRange1(str) {
    for (var i = 1; i < str.length; i++) {
        var nstr = swap(str, i, 0);
        console.log('=ntr', str);
        console.log('==', nstr);
        VerRange(nstr, 0);
    }
}

console.log(allRange1('1234'));
// VerRange('1234', 1);


// 树的遍历
//深搜

