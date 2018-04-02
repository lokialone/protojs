var fs = require('fs');
var path = require('path');
var http = require('http');
var filterDir = require('./filter-dir.js');
const bl = require('bl')
var net =  require('net')
var strftime = require('strftime')
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

// http.get(process.argv[2], (resp) => {
//     // Do stuff with response
//     // A chunk of data has been recieved.
//     // resp.setEncoding('utf8')
//     var bl = new BufferList();
//     resp.on('data', (chunk) => {
//         bl.append(chunk);
//     });
 
//     // The whole response has been received. Print out the result.
//     resp.on('end', () => {
//         console.log(bl.length);
//         console.log(bl.toString());
//     });
 
//     }).on("error", (err) => {
//         console.log("Error: " + err.message);
// });


// http.get(process.argv[2], (res) => {
//     res.pipe(bl((err, data) => {
//         if (err) return console.error(err)
//         data = data.toString()
//         console.log(data.length);
//         console.log(data);     
//     }));
// })
var urls = []
function collectArgvUrl() { 
    process.argv.forEach((item, index) => {
        if (index > 1) urls.push(item)
    })
}
collectArgvUrl()
// const urls = ['http://127.0.0.1:8080/filter-dir.js', 'http://127.0.0.1:8080/text', 'http://127.0.0.1:8080/text2']

// use recursion to do this
// function getRes(url, index) {
//     if (index > urls.length) return;
//     http.get(url, (res) => {
//         res.pipe(bl((err, data) => {
//             if (err) return console.error(err)
//             data = data.toString()
//             console.log(data);
//             index = index + 1;
//             getRes(urls[index], index)
//         }));
//     })
// }
// getRes(urls[0], 0);
// get response in order;
// var results = []
// var count  = []
// function printResults() {
//     for (var i = 0; i < results.length; i++) {
//         console.log(results[i])
//     } 
// }

// function httpGet(i) {
//     http.get(process.argv[2 + i], (res => {
//         res.pipe(bl((err, data) => {
//             if (err) return console.error(err)
//             results[i] = data.toString();
//             count++;
//             if (count === url.length) {
//                 printResults();
//             }
//         }))
//     }))
// }

// for (var i = 0; i < urls.length; i++) {
//     httpGet(urls[i])
//   }

// about tcp module

// var server = net.createServer(function(socket) {
// 	socket.write(strftime('%F %H:%M'), new Date())
//     // socket.pipe(socket);
//     socket.end("\n")
// });

// server.listen(process.argv[2]);

// serve file
// var resFile = process.argv[3]
// var server = http.createServer(function (req, res) {
//     fs.createReadStream(resFile).pipe(res)
// })
// server.listen(process.argv[2])

// change request data
// var map = require('through2-map')
// var tx = map((d) => d.toString().toUpperCase())
// var server = http.createServer((req, res) => {
//     if (req.method === 'POST') {
//         req.pipe(tx).pipe(res)
//     }
// })
// server.listen(process.argv[2])

var url = require('url')

var server = http.createServer((req, res) => {
    let myUrl = url.parse(req.url, true)
    let date = new Date(myUrl.query.iso)
    res.writeHead(200, {'Content-Type': 'application/json'})
    if (myUrl.pathname === '/api/parsetime') {
        // date = date.toISOString()
        let hour = date.getHours()
        let minute = date.getMinutes()
        let second =  date.getSeconds()
        var res_date = {hour: hour, minute: minute, second: second}
        res.write(JSON.stringify(res_date))
    } else if (myUrl.pathname === '/api/unixtime') {
        res.write(JSON.stringify({unixtime: date.getTime()}))
    }
    res.end()
})

server.listen(process.argv[2])








