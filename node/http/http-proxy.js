var httpProxy = require('http-proxy');
var http = require('http');

var proxy = httpProxy.createProxyServer({target:'http://localhost:9000'}).listen(8000); // See (†) 

proxy.on('proxyReq', function(proxyReq, req, res, options) {
    proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
  });
   
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
    res.end();
  }).listen(9000);