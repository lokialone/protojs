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