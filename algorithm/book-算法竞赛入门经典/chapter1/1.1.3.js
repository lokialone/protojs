testData = [4,5,6,5];
testData1 = [];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function assign(data) {
    let arg = data.reduce(reducer) / data.length;
    console.log(arg);
}

assign(testData);
