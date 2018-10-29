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

console.log(qicksort(test))