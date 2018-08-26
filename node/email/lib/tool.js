const path = require('path')

module.exports = {
    getCurrentPath: function (filename) {
        return path.join(process.cwd(), filename)
    },
    getConfigFilePath: function () {
        return this.getCurrentPath('deploy-email-config.json')
    },
   getToken: function (res){
        var arr = res.match(new RegExp('sid=([^"]*)'))
        return arr[1]
    }
}