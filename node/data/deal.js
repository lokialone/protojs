const arr = Array(100).fill(0).map(() => `${~~(Math.random() * 2)},${~~(Math.random() * 2)},${~~(Math.random() * 2)}`);

const compute = (arr) => {
    const arr1 = arr.map((e) => {
        return e.split(',');
    });

    const ret = {};
    arr1.forEach((e) => {
        const key = `${e[0]},${e[1]}`;
        ret[key] = ret[key] || {};

        if (ret[key][e[2]]) {
            ret[key][e[2]] += 1;
        } else {
            ret[key][e[2]] = 1;
        }
    });
    return ret;
}

console.log('input:', arr);
console.log('output:', compute(arr));