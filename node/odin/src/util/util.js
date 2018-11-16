/**
 *获取数据的数据类型，
 * return 小写的类型 array , boolean, object, number, string, null, undefined, function 等
 */
export function getTypeOf (d) {
	return Object.prototype.toString.call(d).slice(8, -1).toLowerCase()
}

/**
 *解析url
 *不使用location实现,兼容node环境
 */
export function getUrlInfo(url) {
	var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/
	return parse_url.exec(url)
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
export function getUrlPath(url) {
	return '/' + (getUrlInfo(url)[5] ? getUrlInfo(url)[5] : '' )
}


/**
 *返回params object
 */
export function getParams(url) {
	let query = getUrlInfo(url)[6] || null
	let res = {}
	if (!query) return res

	query.split('&').forEach((s) => {
		let tmp = s.split('=')
		res[tmp[0]] = tmp[1]
	})
	return res
}

export function isArray(value) {
	return getTypeOf(value) === 'array'
}

export function isString(value) {
	return getTypeOf(value) === 'string'
}

export function isObject(value) {
	return getTypeOf(value) === 'object'
}
/**
 * 判断 string , array, object是否为空,
 * null undefined return true
 * @param {*} value
 */
export function isEmpty(value) {

	if (value == null) return true

	if (isString(value)) return value === ''

	if (isObject(value)) return Object.keys(value).length === 0

	if (isArray(value)) return value.length === 0

	return false
}

export function startsWith(string, target, position) {
	const { length } = string
	position = position == null ? 0 : position
	if (position < 0) {
	  position = 0
	}
	else if (position > length) {
	  position = length
	}
	target = `${target}`
	return string.slice(position, position + target.length) == target
  }

export default {
	getUrlPath,
	getTypeOf,
	getUrlInfo,
	getParams,
	isArray,
	isString,
	isObject,
	isEmpty,
	startsWith
}
