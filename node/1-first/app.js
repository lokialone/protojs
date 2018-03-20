var fs = require('fs');
var path = require('path');
var http = require('http');
var filterDir = require('./filter-dir.js');

// 获取文件内容的行数 类似cat file | wc -l
// let num =  fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;
// fs.readFile(process.argv[2], 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data.split('\n').length - 1);
// });
// console.log(num);

// Create a program that prints a list of files in a given directory,

// filterDir(process.argv[2], process.argv[3], (err, data) => {
//     if (err)  {
//         console.log(err);
        
//     } else {
//         data.forEach((item) => {
//             console.log(item);  
//         });
//     }
// });

http.get(process.argv[2], (resp) => {
    // Do stuff with response
    // A chunk of data has been recieved.
    resp.setEncoding('utf8')
    resp.on('data', (chunk) => {
     console.log(chunk);
     
    });
 
    // The whole response has been received. Print out the result.
    // resp.on('end', () => {
    //     console.log(data);
    // });
 
    }).on("error", (err) => {
        console.log("Error: " + err.message);
});





