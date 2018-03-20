var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {   
    fs.readdir(dir, (err, data) => {        
        if (err) return callback(err);
        var res = data.filter(item => path.extname(item) === '.'+ ext);
        callback(null, res);
        
    });
}