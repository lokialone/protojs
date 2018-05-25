let http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs");

let staticPath = "./static/";

let app = http.createServer((request, response) => {
    let pathName = url.parse(request.url).pathname,
        realPath = path.join(staticPath, pathName); // 请求文件的在磁盘中的真实地址

    fs.exists(realPath, (exists) => {
        if(!exists) {
            // 当文件不存在时
            response.writeHead(404, {"Content-Type": "text/plain"});

            response.write("This request URL ' " + realPath + " ' was not found on this server.");
            response.end();
        } else {
            // 当文件存在时
            fs.readFile(realPath, "binary", (err, file) => {
                if (err) {
                    // 文件读取出错
                    response.writeHead(500, {"Content-Type": "text/plain"});

                    response.end(err);
                } else {
                    // 当文件可被读取时，输出文本流
                    response.writeHead(200, {"Content-Type": "text/plain"});
                    response.write(file, "binary");
                    response.end();
                }
            });
        }
    });
});
app.listen(8080, "127.0.0.1");