
/**
 *练习一， 使接受多个参数的函数变成接受一个参数的函数
 * @param {*} fn
 * @returns
 */
function unary (fn) {
    return (arg) => fn(arg)
}

console.log(['1', '2', '3'].map(unary(parseInt)))


