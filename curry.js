console.log(parseInt('111.2', 10));



function curry(fun) {
    return function(args){
        return fun(args);
    }
}

console.log(['11', '12', '112.3'].map(parseInt));
//使用curry确保每次只要一个参数
console.log(['11', '12', '112.3'].map(curry(parseInt)));

function validator(message, fun) {
    var f = function() {
        return fun.apply(fun, arguments);
    };
    f['message'] = message;
    return f;
}