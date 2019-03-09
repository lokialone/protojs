// reduce 使用实战
/**
 * 将多维数组铺平
 * @param {*} arr 
 */
function flatten(arr) {
    return arr.reduce((acc, v) => {
        return Array.isArray(v) ? acc.concat(flatten(v)) : acc.concat(v) 
    }, [])
}

console.log(flatten([[1], [2, 3], [[2,3], 2]]));