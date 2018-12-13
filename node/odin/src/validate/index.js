import Util from '../util/tool'
import idx from 'idx'
import Bragi from '../util/bragi'
import { ENV, ERROR_TYPE, REMOTE_SCHEMA_API } from '../const'
import validate from './validate'
import axios from 'axios'
import errorCapture from '../util/report'
import { formatSchema } from './schema'
import ValidateError from './error'
import store from 'store'

const currentStore ='_SOUCHE_SCHEMA'

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
Sif.init = function ({ env, name, httpRequest, vueRouter}) {
	this.projectName = name
	this.storeName = name + currentStore
	this.schema = store.get(this.storeName) || {}
	this.env = env || ENV.DEV
	// 兼容httpRequest
	if (httpRequest) this.validateHttpRequest(httpRequest)
	// 兼容VueRouter
	if (vueRouter) this.validateVueRoute(vueRouter)
	// TODO rn route 校验
	// if (router) this.validateRoute(router)
	Bragi.addTask(() => {
		this.getSchema()
	})
}

/**
 * vue-route校验
 * @param {*} router
 */
Sif.validateVueRoute = function (router) {
	router.afterEach((to) => {
		const routerSchema = idx(to, _ => _.meta.validate)
		const params = to.params
		const query = to.query
		const data = Object.assign(query, params)

		if (routerSchema) {
			Bragi.addTask(() => {
				this.validateRoute({data, routerSchema, path: to.path})
			})
		}
	})
}
/**
 * router校验
 * @param {*} to
 */
Sif.validateRoute = function ({ data, routerSchema, path } ) {
	const schema = formatSchema(routerSchema)
	try {
		validate(schema, data)
	} catch (error) {
		ValidateError.printError('route 参数不匹配 ' , path , error.message)
		errorCapture(ERROR_TYPE.API_PARAMS_ERROR, {
			router: path,
			env: this.env,
			error: error.message,
		})
	}
}
// httpRequest校验适配器
Sif.validateHttpRequest = function (httpRequest) {
	httpRequest.afterEach((res) => {
		const url = res.params.url
		const params = Util.getParams(url)
		Bragi.addTask(() => {
			this.validateHttp(url, params, res.json)
		})
	})
}
// axios校验适配器
Sif.validateAxios = function (res) {
	const url = res.config.url
	const params = res.config.params
	Bragi.addTask(() => {
		this.validateHttp(url, params, res.data)
	})
}
// 校验http是否正确
Sif.validateHttp = async function (url, params, response) {
	// 没有初始化信息，不校验
	if (!this.projectName) {
		console.warn('未进行初始化配置， 不进行校验')
		return
	};

	const path = Util.getUrlPath(url)

	let schema = this.schema

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
		ValidateError.printError('request params 验证失败 ' , url, error.message)
		errorCapture(ERROR_TYPE.API_PARAMS_ERROR, {
			api: url,
			env: this.env,
			error: error.message,
		})
	}

	//接口返回错误
	if (!response || !response.success) {
		console.log('response', response)
		errorCapture(ERROR_TYPE.API_STATUS_ERROR, {
			api: url,
			env: this.env,
			status: idx(response, _ => _.code)
		})
		return;
	}

	// validate reponse data
	try {
		validate(schema[path].data, response.data, 'data')
	} catch (error) {
		ValidateError.printError('response data 验证失败 ' , url, error.message)
		// data =>api, key, value,traceId
		errorCapture(ERROR_TYPE.API_DATA_ERROR, {
			api: url,
			env: this.env,
			error: error.message,
			traceId: response.traceId
		})
	}
}

/**
 * 获取服务端schema
 * 只执行一次
 */
Sif.getSchema = function () {
	axios.get(REMOTE_SCHEMA_API.RemoteSchemaApi + this.projectName)
	.then((res) => {
		if (res.data.success) {
			store.set(this.storeName, res.data.data.projectSchema)
		}
	}).catch((error) => {
		console.error(error, 'fail to get remote schema, validate data with cache schema')
	})
}


export default Sif
