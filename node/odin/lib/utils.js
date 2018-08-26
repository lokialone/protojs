const util = require('util')
const path = require('path')

// 输出对象
function log(obj) {
	console.log('======', util.inspect(obj, {depth : null}))
}

/**
 * 查询当前项目下 src -> api文件夹里所有出现过的api
 * 匹配为 api的标准为   '*.json'  (jsonp 暂不支持) 有空看下能不能搞
 */
function getAllApiInProject () {

}

module.exports = {
	log,
	getCurrentPath: function (filename) {
        return path.join(process.cwd(), filename)
    },
    getUrlSchemaPath: function () {
        return this.getCurrentPath('url-json-schema.json')
	}
}
