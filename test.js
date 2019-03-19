var test =[4,3,3,2]

function qicksort(arr) {
    if (arr.length <= 1) return arr 
    let index = arr.shift()
    let left = []
    let right = []
    arr.forEach(item => {
        item > index ? right.push(item) : left.push(item)
    })
    return qicksort(left).concat(index, qicksort(right))
}

// console.log(qicksort(test))

var Type = {}
for(var i = 0, type; type = ['String', 'Array', 'Number'][i++];) {
    (function (type) {
        Type['is' + type] = function(obj) {
            return Object.prototype.toString.call(obj) === '[object' + type + ']'
        }
    })(type)
}

// console.log(Type)
// console.log(Type.isArray([]))

let type2 = ['String', 'Array', 'Number'][0]
// console.log(type)
function capitailize(string) {
    return capIter(string, true, '')
}

function capIter(string, whitespace = false, res) {
    if (string.length <= 0) return res;
    let c = string[0];
    if (whitespace) c = c.toUpperCase();
    c === ' ' ?  whitespace = true : whitespace = false
    return capIter(string.substring(1), whitespace, res +=c)
}
console.log(capitailize('are you ok!'));