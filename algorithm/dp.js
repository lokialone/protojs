// ugly numbers

function nthUglyNumber(n) {
    let a2 = 1;
    let a3 = 1;
    let a5 = 1;
    let nextU2 = 1;
    let nextU3 = 1;
    let nextU5 = 1;
    let ugly = 1;
    let uglys = [1];
    // let nextUgly
    for(let i = 1; i < n; i++) {
        ugly = Math.min(nextU2 * 2, nextU3 * 3, nextU5 * 5);
        uglys.push(ugly);
        if (ugly === nextU2 * 2) {
            nextU2 = uglys[a2++];            
        }
        if (ugly === nextU3 * 3) {
            nextU3 = uglys[a3++];
        }
        if (ugly === nextU5 * 5) {
            nextU5 = uglys[a5++];
        }
    }
    return ugly;
}

console.log(ceateUglyNumber(150));