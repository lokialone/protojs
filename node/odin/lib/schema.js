/**
 *	处理model to json schema(非标准)
 */
const _ = require('lodash')
const util = require('./utils')
const fs =  require('fs')

function Schema(models) {
	this.models = models;
}

Schema.prototype.basicType = ['string', 'boolean', 'array', 'object', 'number']
/**
 * 根据swagger model, 生成api的schema
 * 依赖 model,basicType 。basicType以外的数据类型需要使用
 * @param {*} data  例如 http://topgear.prepub.souche.com/api-docs//souche/consignment-action 拿到的数据
 * @param {*} schema = {}可不传
 * return schema
 */
Schema.prototype.toSchema = function (data, schema = {}) {
	if (_.isUndefined(data)) return schema

	schema.$required = true
	if (_.has(data, 'properties')) {
		_.forOwn(data.properties, (value, key) => {
			schema.$type = 'object'
			schema[key] = {}
			this.toSchema(value, schema[key])
		})
	}

	if (data.type === 'integer') data.type= 'number'

	// model里自定义的对象
	if (data.type && !_.includes(this.basicType, data.type)) {
		schema.$type = 'object'
		// 该类型可以为任意类型，故不做判断
		if (data.type === 'Map«string,object»') {
			schema.$required = false
		} else {
			let tmp = this.models[data.type]
			_.forOwn(tmp.properties, (value, key) => {
				schema[key] = {}
				this.toSchema(value, schema[key])
			})
		}
	}
	// 处理数组定义
	if (data.type === 'array' && _.has(data, 'items')) {
		schema.$type = 'array'
		schema.items = {}
		this.toSchema(data.items, schema.items)
	}

	if (data.type && _.includes(this.basicType, data.type)) {
		schema.$type = data.type
	}

	return schema
}

/**
 * 将api的传参转成schema形式
 * @param {} parameters
 */
Schema.prototype.paramsToSchema = function (parameters) {
	if (!parameters || _.isEmpty(parameters)) return {}
	let res = {$type: 'object', $required: true}
	_.forEach(parameters, (item) => {
		item.type === 'integer' ? item.type = 'number' : null
		let required =  false
		// 若类型不在基本类型里，就设置为不需要验证
		_.includes(this.basicType, item.type) ? required = item.required : null
		res[item.name] = {
			$required: required,
			$type: item.type
		}
	})
	return res
}

/**
 * 将route 配置转成json schema
 * params => { key: type, key: array }
 * @param {*} params
 */
Schema.routeConfigToSchema = function (params) {
	if (!params || _.isEmpty(params)) return {}
	let res = {$type: 'object', $required: true}
	_.forEach(params, (value, key) => {
		if (_.isArray(value)) {
			let required = value.length ? true : false
			res[key] = {
				$enum: value,
				$required: required,
				$type: 'string'
			}
		} else {
			res[key] = {
				$required: true,
				$type: value
			}
		}

	})
	return res
}

/**
 * 将传入的json schema数据 保存在当前文件根目录下
 * @param {*} data type json
 */
Schema.saveSchema = async function (data) {
	const configPath = util.getUrlSchemaPath()
	const writeStream = fs.createWriteStream(configPath)
	writeStream.write(JSON.stringify(data, null, 2))
	await writeStream.end()
}

// TODO
// 移除项目里的未曾使用过的 api schema
Schema.removeUnUseSchema = function (apis) {
	const data = require(util.getUrlSchemaPath())
	let res = {}
	apis.forEach((item) => {
		if (!data[item]) {
			console.error(item, 'url-json-schema 中没有该定义')
		} else {
			res[item] = data[item]
		}

	})
	this.saveSchema(res)

}

module.exports = Schema
