import Util from '../util/tool'
import idx from 'idx'
import Bragi from '../util/bragi'
import config from '../config'
import validate from './validate'
import axios from 'axios'
import errorCapture from './error-capture'
import { formatSchema } from './schema'

const Sif = {
	schema: {},
	env: '',
	projectName: '',
	remoteSchema: ''
}

/**
 *	init schema, router
 *  @param {*} param name
 *
 */
Sif.init = function ({ env, name, httpRequest, vueRouter, schema }) {
	this.projectName = name
	// for test
	this.schema = schema
	this.env = env || config.ENV.DEV
	// 兼容httpRequest
	if (httpRequest) this.validateHttpRequest(httpRequest)
	// 兼容VueRouter
	if (vueRouter) this.validateVueRoute(vueRouter)
	// TODO rn route 校验
	// if (router) this.validateRoute(router)
}

/**
 * validate vue-route
 * @param {*} router
 */
Sif.validateVueRoute = function (router) {
	router.afterEach((to) => {
		const routerSchema = idx(to, _ => _.meta.validate)
		const params = to.params
		const query = to.query
		const data = Object.assign(query, params)
		if (validate) {
			Bragi.addTask(() => {
				this._validateRoute({data, routerSchema })
			})
		}
	})
}
/**
 *
 * @param {*} to
 */
Sif.validateRoute = function ({ data, routerSchema } ) {
	const schema = formatSchema(routerSchema)
	try {
		validate(schema, data)
	} catch (error) {
		console.error('route 参数不匹配', error)
		errorCapture({
			type: 'route',
			error
		})
	}
}

Sif.validateHttpRequest = function (httpRequest) {
	httpRequest.afterEach((res) => {
		const url = res.params.url
		const params = Util.getParams(url)
		Bragi.addTask(() => {
			this.validateHttp(url, params, res.json)
		})
	})
}


Sif.validateAxios = function (res) {
	const url = res.config.url
	const params = res.config.params
	Bragi.addTask(() => {
		this.validateHttp(url, params, res.data)
	})
}

Sif.validateHttp = async function ( url, params, response) {
	// 没有初始化信息，不校验
	if (!this.projectName) {
		console.warn('未进行初始化配置， 不进行校验')
		return
	};

	const path = Util.getUrlPath(url)
	let schema = await this.getSchema()

	// for test
	schema = this.schema

	// 拿不到schema不进行校验
	if (Util.isEmpty(schema)) {
		console.warn('没有schema')
		return
	}
	// schema里没有这条记录就不验证
	if (!schema[path]) {
		console.warn(url+ '没有schema')
		return
	}
	try {
		validate(schema[path].params, params, 'params')
	} catch (error) {
		console.error('request params 验证失败', url, error.message)
		errorCapture({url, code: response.code, type: 'reponse', error})
	}

	// response返回失败不做校验
	// TODO 返回状态异常监控
	console.log('response', response)
	if (!response || !response.success) {
		errorCapture();
		return;
	}

	// validate reponse data
	try {
		validate(schema[path].data, response.data, 'data')
	} catch (error) {
		console.error('response data 验证失败' , url, error.message)
		errorCapture({url, code: response.code, type: 'reponse', error})
	}
}

/**
 * 获取remote schema
 * 同时执行几个validateHttp时还是会请求多次。TODO
 * 只执行一次
 */

Sif.getSchema = async function () {
	// console.log('try get schema', this.remoteSchema)
	if (this.remoteSchema === '') {
		this.remoteSchema = await axios.get(config.RemoteSchemaApi + this.projectName)
		.then((res) => {
			if (res.data.success) return res.data.data.projectSchema
			return {}
		}).catch((error) => {
			console.error(error, 'fail to get remote schema, validate data with local schema')
			return {}
		})
		// console.log('get schema', this.remoteSchema)
		return this.remoteSchema
	} else {
		return this.remoteSchema
	}
}


export default Sif
