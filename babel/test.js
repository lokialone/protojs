var babel = require("@babel/core");
var t = require('@babel/types');
const code = `import {uniq, extend, flatten, cloneDeep } from "lodash"`;
const visitor = {
    // Identifier(path){
    //     if (path.node.name == "uniq") {
    //         var newIdentifier = t.identifier('_uniq')  //创建一个名叫_uniq的新identifier节点
    //         console.log(newIdentifier, path.node);
    //         path.replaceWith(newIdentifier)            //把当前节点替换成新节点
    //     }
    // }
    ImportDeclaration(path, _ref = {opts:{}}){
        const specifiers = path.node.specifiers;
        const source = path.node.source;
        if (!t.isImportDefaultSpecifier(specifiers[0]) ) {
            var declarations = specifiers.map((specifier, i) => {   //遍历  uniq extend flatten cloneDeep
                //eslint-disable-next-line
                console.log('specifier', specifier);
                return t.ImportDeclaration(                               //创建importImportDeclaration节点
                    [t.importDefaultSpecifier(specifier.local)],
                    t.StringLiteral(`${source.value}/${specifier.local.name}`)
                )
            })
            path.replaceWithMultiple(declarations)
    
        }
    }
}


const result = babel.transform(code, {
    plugins: [{
        visitor: visitor
    }]
});

console.log('====================================');
console.log(result.code);
console.log('====================================');