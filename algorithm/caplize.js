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