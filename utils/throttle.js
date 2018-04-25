// 节流函数
function throttle(method, context) {
    console.log(context);
    clearTimeout(method.tId);
    method.tId = setTimeout(function(){
        method.call(context);
    }, 100);
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