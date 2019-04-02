var babel = require("@babel/core");
var t = require('@babel/types');
const code = `import {uniq, extend, flatten, cloneDeep } from "lodash"`;
const visitor = {
    Identifier(path){
        path.node.name = 'hello'
        console.log(path.node.name);
        console.log(path.node)
    }
}
const result = babel.transform(code, {
    plugins: [{
        visitor: visitor
    }]
})

console.log('====================================');
console.log(result);
console.log('====================================');