const _ = require('lodash')
const idx = require('idx')
const Http = require('@souche-f2e/http-request').default
const Util = require('./utils')
const Raven = require('raven-js')
const Schema = require('./schema')

function isArrayWithItems(schema) {
	return schema.$type === 'array' && _.has(schema, 'items')
}



function Odin() {
	this.schema = {}
	this.validateKey = 'data'
}


/**
 *	init schema, router
 * @param {*} param schema必填, env, router选填
 */
Odin.init = function ({ schema, env, router}) {
	this.schema = schema
	this.env = env || 'dev'
	Http.afterEach((res) => {
		const url = res.params.url
		const path = Util.getUrlPath(url)
		let params = Util.getParams(url)
		const localSchema = this.schema[path]
		if (!localSchema) {
			console.error(url + 'url-json-schema没有该model')
			return
		}
		if (res.params.data) {
			let params = _.assign(res.params.data, params)
		}

		// 验证params
		try {
			this.validate(localSchema.params, params)
		} catch (error) {
			console.error('request params 验证失败', url, error.message)
			this.errorCapture({url, code: res.json.code, type: 'request'})
		}

		// 验证返回值data
		if (!res.json.success) return
		try {
			this.validate(localSchema.data, res.json.data)
		} catch (error) {
			console.error('response data 验证失败' , url, error.message)
			this.errorCapture({url, code: res.json.code, type: 'reponse'})
		}

	})

	if (router) {
		this.validateRoute(router)
	}
}
/**
 * sentry errorCapture
 * @param {*} param0
 */
Odin.errorCapture = function ({url, code, type}) {
	if (this.env === 'prod' || this.env === 'prepub') {
		let txt = 'Server ERROR, url = '+ url+', code =' + code
		if (!url) {
			txt = 'route data ERROR'
		}
		Raven.captureException(txt, {
			logger: 'javascript',
			level: 'ERROR',
			tags: {
				monitor: type
			}
		})
	}
}
/**
 * validate vue-route
 * @param {*} router
 */
Odin.validateRoute = function (router) {
	router.beforeEach((to, from, next) => {
		const validate = idx(to, _ => _.meta.validate)
		if (validate) {
			const params = to.params
			const query = to.query
			const data = _.assign(query, params)
			const schema = Schema.routeConfigToSchema(validate)
			try {
				this.validate(schema, data)
			} catch (error) {
				console.error('route 参数不匹配', error)
				this.errorCapture({
					type: 'route'
				})
			}
		}
		next()
	})
}

/**
 * 验证传入的schema 与 data,
 * 上传error to sentry
 * @param {*} schema
 * @param {*} data
 * @returns Boolean
 */
Odin.validate = function(schema, data) {
	if (!schema || _.isEmpty(schema) || !schema.$required) return
	if (schema.$type === Util.getTypeOf(data)) {
		if (isArrayWithItems && data.length) this.validate(schema.items, data[0])

		if (schema.$type === 'string') {
			this.validateString(schema, data)
		}

		if (schema.$type === 'number') {
			this.validateNumber(schema, data)
		}

		if (schema.$type === 'object') {
			for (let i in schema) {
				if (schema.hasOwnProperty(i) && !_.startsWith(i, '$')) {
					this.validateKey = i
					if (!data[i]) {
						throw new Error(i + ' undefined')
					}
					this.validate(schema[i], data[i])
				}
			}
		}
	} else {
		throw new Error(i + 'type error')
	}
}

// type string 需校验 $enum $regex
Odin.validateString = function (schema, data) {
	if (schema.hasOwnProperty('$enum') && schema.$enum.length) {
		if (schema.$enum.indexOf(data) === -1) throw new Error(this.validateKey +' : ' + data + ' not in enum ' + schema.$enum)
	}
	// to do
	// if (schema.hasOwnProperty('$regex')) {
	// 	data.test()
	// }
}

// $max $min $enum
Odin.validateNumber = function(schema, data) {
	if (schema.hasOwnProperty('$max')) {
		if (data > schema.$max) throw new Error(this.validateKey +' : ' + data + 'greater than maxinum' + schema.$max)
	}

	if (schema.hasOwnProperty('$min')) {
		if (data < schema.$max) throw new Error(this.validateKey +' : ' + data + 'less than mininum' + schema.$min)
	}

	if (schema.hasOwnProperty('$enum') && schema.$enum.length) {
		if (schema.$enum.indexOf(data) === -1) throw new Error(this.validateKey +' : ' + data + 'not in enum' + schema.$enum)
	}
}


/**
 * 验证传入的api的数据
 * @param {*} url
 * @param {*} data
 */
Odin.validateApi = function ({ url, data, params }) {
	if (!url || !data) {
		console.error('请输入有效的url or data')
		return
	}

	let path = Util.getUrlPath(url)
	if (!path) {
		console.error('请输入有效的url or data')
		return
	}

	let schema = this.schema[path]
	if (!schema) {
		console.error('未找到api对应的schema')
	}
	// 验证params
	try {
		this.validate(schema.params, params)
	} catch (error) {
		console.log(error)
	}

	// 验证response
	try {
		this.validate(schema.data, data)
	} catch (error) {
		console.log(error)
	}
}


module.exports = Odin
