// 节流函数
// xms内连续调用n次，只回应最后一次
function debounce(method, context) {
    clearTimeout(method.tId);
    method.tId = setTimeout(function(){
        method.call(context);
    }, 2000);
}
// 先调用一次，xms后开始继续响应
function throttle(method, context) {
    if (method.lock) return;
    method.lock = true;
    method.call(context);
    setTimeout(() => {
        method.lock = false;
    }, 2000);
}


var i = 0;
function log() {
    console.log('i', i);
}
// i++
// debounce(log);
// i++
// debounce(log);
// i++
// debounce(log);
i++
throttle(log);
i++
throttle(log);
i++
throttle(log);

