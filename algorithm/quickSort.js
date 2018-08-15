function  quickSort(params) {
    if (!params.length) return [];
    let first = params.splice(0,1);
    let left = [];
    let right = [];
    params.forEach(item => {
        first > item ? left.push(item) : right.push(item)
    }); 
    return quickSort(left).concat(first, quickSort(right));
}

console.log(quickSort([1,2,9,4,3,5,2,0]));