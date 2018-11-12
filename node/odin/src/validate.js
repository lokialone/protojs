import Util from './util'
// import Http from '@souche-f2e/http-request'
import Raven from 'raven-js'
import axios from 'axios'
import idx from 'idx'
import Bragi from './report'
import ValidateError from './error'
import Rules from './rules'
import config from './config'

function isArrayWithItems(schema) {
	return schema.$type === 'array' && schema.hasOwnProperty('$items')
}

const Sif = {
	localSchema: {},
	env: '',
	remoteSchemaId: '',
	remoteSchema: null,
	rules: Rules
}

/**
 *	init schema, router
 * @param {*} param schema, name必填, env, router, http选填
 */
Sif.init = function ({ schema, env, router, name, Http}) {
	this.localSchema = schema || {}
	this.Http = Http
	this.name = name
	this.env = env || config.ENV.DEV
	if (Http) this.validateHttp()
	if (router) this.validateRoute(router)
}
/**
 * errorCapture
 * @param {*} param
 */
Sif.errorCapture = function ({url, code, type, error}) {
	let desc
	type !== 'route' ? desc = 'JSON Server ERROR, url = '+ url+', code =' + code : desc = 'route data ERROR'
	desc = desc + '\n\n' + error
	if (this.env === config.ENV.PROD) {
		Bragi.addTask(() => {
			this.report(type, desc)
		})
	}
}
/**
 * 上报数据
 * @param {*} type
 * @param {*} desc
 */
Sif.report = function (type, desc) {
	Raven.captureException(desc, {
		logger: 'javascript',
		level: 'ERROR',
		tags: {
			monitor: type
		}
	})
}
/**
 * validate vue-route
 * @param {*} router
 */
Sif.validateRoute = function (router) {
	router.afterEach((to) => {
		const validate = idx(to, _ => _.meta.validate)
		if (validate) {
			Bragi.addTask(() => {
				this._validateRoute(to, validate)
			})
		}
	})
}
/**
 *
 * @param {*} to
 */
Sif._validateRoute = function (to, validate) {
	const params = to.params
	const query = to.query
	const data = Object.assign(query, params)
	const schema = this.formatSchema(validate)
	try {
		this.validate(schema, data)
	} catch (error) {
		console.error('route 参数不匹配', error)
		this.errorCapture({
			type: 'route',
			error
		})
	}
}

Sif.validateHttp = function () {
	this.Http.afterEach((res) => {
		const url = res.params.url
		const path = Util.getUrlPath(url)
		const params = Util.getParams(url)
		Bragi.addTask(() => {
			this._validateHttp(path, url, params, res.json)
		})
	})
}


Sif.validateAxios = function (res) {
	const url = res.config.url
	const path = Util.getUrlPath(url)
	const params = res.config.params
	Bragi.addTask(() => {
		this._validateHttp(path, url, params, res.data)
	})
}

Sif._validateHttp = async function (path, url, params, response) {
	let schema = await this.getSchema()
	// validate params
	// schema里没有这条记录就不验证
	if (!schema[path]) {
		console.warn(url+ '没有schema')
		return
	}
	try {
		this.validate(schema[path].params, params, 'params')
	} catch (error) {
		console.error('request params 验证失败', url, error.message)
		this.errorCapture({url, code: response.code, type: 'reponse', error})
	}

	// response返回失败不做校验
	if (!response.success) return

	// validate reponse data
	try {
		this.validate(schema[path].data, response.data, 'data')
	} catch (error) {
		console.error('response data 验证失败' , url, error.message)
		this.errorCapture({url, code: response.code, type: 'reponse', error})
	}
}

/**
 * 验证传入的schema 与 data,
 * 上传error to sentry
 * @param {*} schema
 * @param {*} data
 * @returns Boolean
 */
Sif.validate = function(schema, data, key) {
	if (!schema || Util.isEmpty(schema)) return

	if (!schema.$required && data === null) return

	if (data === undefined || data === null) {
		throw new ValidateError(key + ' undefined or null')
	}

	if (schema.$type === Util.getTypeOf(data)) {
		const basicType = ['string', 'number']

		if (basicType.includes(schema.$type)) {
			this.rules(schema.$type, schema, data, key )
		}
		// $type = array
		if (isArrayWithItems) this.validate(schema.$items, data[0], key)

		// $type = object
		if (schema.$type === 'object') {
			Object.keys(schema).forEach((i) => {
				if (!Util.startsWith(i, '$')) {
					this.validate(schema[i], data[i], i)
				}
			})
		}
	} else {
		throw new ValidateError(key + ' type error; should be ' + schema.$type + ' actual ' + Util.getTypeOf(data))
	}
}

/**
 * 获取remote schema
 */
Sif.getRemoteSchema = function () {
	if (!this.remoteSchema) {
		this.remoteSchema = axios.get(config.RemoteSchemaApi + this.name)
			.then((res) => {
				if (res.data.success) return res.data.data.projectSchema
				return {}
			}).catch((error) => {
				console.error(error, 'fail to get remote schema, validate data with local schema')
				return {}
			})
	}
	return this.remoteSchema

}

Sif.getSchema = async function () {
	let remoteSchema = await this.getRemoteSchema()
	if (Util.isEmpty(remoteSchema)) return this.localSchema
	return this.localSchema
}

Sif.formatSchema = function (params) {
	if (!params || Util.isEmpty(params)) return {}

	let res = {$type: 'object', $required: true}

	Object.keys(params).forEach((key) => {
		let value = params[key]
		if (Util.isArray(value)) {
			let required = value.length ? true : false
			res[key] = {
				$enum: value,
				$required: required,
				$type: Util.getTypeOf(value[0])
			}
		} else if (value === 'string') {
			res[key] = {
				$required: true,
				$type: 'string'
			}
		} else {
			res[key] = {
				$required: true,
				$type: value
			}
			console.warn('路由跳转传值推荐使用string类型')
		}
	})
	return res
}

export default Sif
