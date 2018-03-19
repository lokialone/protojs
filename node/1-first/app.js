var fs = require('fs');
var path = require('path');
// 获取文件内容的行数 类似cat file | wc -l
// let num =  fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;
// fs.readFile(process.argv[2], 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data.split('\n').length - 1);
// });
// console.log(num);

// Create a program that prints a list of files in a given directory,
fs.readdir(process.argv[2], function(err, data) {
    if (err) throw err;
    let res = data.filter(item => item.includes('.'+process.argv[3]));
    data.forEach((item) => {
        if (path.extname(item) === ('.'+process.argv[3])) {
            console.log(item);
        }
    });
});



