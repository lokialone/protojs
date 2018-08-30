const _ = require('lodash')
const Util = require('./utils')

// const urlJsonSchema = require(Util.getUrlSchemaPath())
const urlJsonSchema = require('../url-json-schema.json')



function isArrayWithItems(schema) {
	return schema.$type === 'array' && _.has(schema, 'items')
}

/**
 * 验证传入的schema 与 data
 * @param {*} schema
 * @param {*} data
 * @returns Boolean
 */

function validate(schema, data) {
	if (!schema) return
	if (schema.$type === Util.getTypeOf(data) ) {
		if (isArrayWithItems && data.length) validate(schema.items, data[0])
		if (schema.$type === 'object') {
			for (let i in schema) {
				if (schema.hasOwnProperty(i) && !_.startsWith(i, '$')) {
					if (!data[i]) {
						console.error(': '+ i + ' undefined 未返回有效的数据')
						return false
					}
					validate(schema[i], data[i])
				}
			}
		}
	} else {
		console.error(': type error', schema, data)
		return false
	}
}
/**
 * 验证传入的url的数据
 * @param {*} url
 * @param {*} data
 */
function validateUrlData(url, data) {
	if (!url || !data) {
		console.error('请输入有效的url or data')
		return
	}

	let path = Util.getUrlPath(url)
	if (!path) {
		console.error('请输入有效的url or data')
		return
	}

	let schema = urlJsonSchema[path]
	if (!schema) {
		console.error('未找到api对应的schema')
	}
	validate(schema, data, path)
}

module.exports = {
	validateUrlData
}
