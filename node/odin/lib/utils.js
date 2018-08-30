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
/**
 *获取数据的数据类型，
 * return 小写的类型 array , boolean, object, number 等
 */
function getTypeOf (d) {
	return Object.prototype.toString.call(d).slice(8, -1).toLowerCase()
}

/**
 *解析url
 *不使用location实现,兼容node环境
 */
function getUrlInfo(url) {
	var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/
	result = parse_url.exec(url)
	return result
    // blanks = '       ';
    // fields = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];
	// fields.forEach((field, i) => {
	// 	console.log(field + ':' + blanks.substr(field.length) + result[i]);
	// });
}

/**
 * get url path
 * @param String url
 * @return String path
 */
function getUrlPath(url) {
	return getUrlInfo(url)[5]
}

module.exports = {
	log,
	getCurrentPath: function (filename) {
        return path.join(process.cwd(), filename)
    },
    getUrlSchemaPath: function () {
        return this.getCurrentPath('url-json-schema.json')
	},
	getTypeOf,
	getUrlPath
}
