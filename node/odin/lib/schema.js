/**
 *	处理model to json schema(非标准)
 */
const _ = require('lodash')
const util = require('./utils')
const fs =  require('fs')
const CLI = require('clui')


function Schema(models) {
	this.models = models;
}

Schema.prototype.basicType = ['string', 'boolean', 'array', 'object', 'integer', 'number']
/**
 * 根据swagger model, 生成api的schema
 * 依赖 model,basicType 。basicType以外的数据类型需要使用
 * @param {*} data  例如 http://topgear.prepub.souche.com/api-docs//souche/consignment-action 拿到的数据
 * @param {*} schema = {}可不传
 * return schema
 */
Schema.prototype.toSchema = function (data, schema = {}) {
	if (_.isUndefined(data)) return schema

	if (_.has(data, 'properties')) {
		_.forOwn(data.properties, (value, key) => {
			schema.type = 'object'
			schema[key] = {}
			this.toSchema(value, schema[key])
		})
	}
	// model里自定义的对象
	if (data.type && !_.includes(this.basicType, data.type)) {
		schema[data.type] = {}
		schema.type = 'object'
		this.toSchema(this.models[data.type], schema[data.type])
	}

	if (data.type === 'array' && _.has(data, 'items')) {
		schema.type = 'array'
		schema.items = {}
		this.toSchema(data.items, schema.items)
	}

	data.type && _.includes(this.basicType, data.type) ? schema.type = data.type : null

	return schema
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
Schema.removeUnUseSchema = function () {

}

module.exports = Schema
