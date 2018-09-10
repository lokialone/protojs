const _ = require('lodash')
const axios = require('axios')
const Schema = require('./schema')
const idx = require('idx')
const Configstore = require('configstore')
const pkg = require('../package.json')
// const testData = require('../test.json')
const auth = require('./auth')
const Util = require('./utils')
/**
 * create swagger api schema
 * @param {*} data 数据为 ===>例如 http://topgear.prepub.souche.com/api-docs/souche/consignment-action
 * return object  {url: schema, url: schema}
 */

 /**
 * get swagger info
 * @param {*} baseUrl
 */

const conf = new Configstore(pkg.name)
const retryTime = 1
let tryTime = 0

async function getApiDocsInfo(baseUrl) {
	axios.defaults.headers.get['Cookie'] = `_security_token=${conf.get('token')}`
	try {
		const res = await axios.get(baseUrl)
		if (res.data.apis) {
			return res.data.apis
		}
		tryTime += 1
		console.log('token失效, try login in.....')
		if (tryTime <= retryTime) {
			await auth.loginTest()
			return await getApiDocsInfo(baseUrl)
		}
	} catch (error) {
		console.log(error)
	}
}

/**
 * 处理swagger response data
 * @param {*} baseUrl
 * @param {*} data
 */
function dealSwaggerModelToScheme(baseUrl, data) {
	const models = data.models
	const schema = new Schema(models)
	let res = {}
	_.forEach(data.apis, (item) => {
		const api = item.path
		res[api] = {}
		// response对象
		const response = idx(item, _ => _.operations[0].type)
		const parameters = idx(item, _ => _.operations[0].parameters)
		if (!api || !response || !models) {
			console.error('解析api model出错: ' + baseUrl + api + response)
			return {}
		}

		//response data 对象 需要验证的对象
		let reData= idx(models, _ => _[response].properties.data)

		// 处理后端model不统一的问题
		if (!reData) {
			let data = idx(models, _ => _[response].properties)
			data ? reData = {type: 'object', properties: data} : null
		}
		if (!reData) {
			console.error('未返回有效的model: ' + baseUrl + api )
			return {}
		}
		res[api].data = schema.toSchema(reData)
		res[api].params = schema.paramsToSchema(parameters)
	})
	return res
}
/**
 * 根据api 生成 json-schema文件
 * @param {*} api
 */
async function createSchemaFile (baseUrl) {
	const docsInfo = await getApiDocsInfo(baseUrl);
	// for get api-docs info concurrently
	const apiInfo= docsInfo.map(async item => {
		let data = await axios.get(baseUrl + item.path)
    	return data.data
  	});
	// get all apis and models
	const tmp = []
  	for (let info of apiInfo) {
    	tmp.push(await info)
	}
	// tmp data  ==> such as http://topgear.prepub.souche.com/api-docs/souche/consignment-action
	let schemas = {}
	_.forEach(tmp, (value) => {
		schemas = _.assign(schemas, dealSwaggerModelToScheme(baseUrl, value))
	})
	return schemas
}

async function createSchemaFiles(urls) {
	if (!urls.length) throw new Error ('传入的url 不能为空')
	let schemas = {}
	for (let i = 0, len = urls.length; i < len; i++) {
		let tmp = await createSchemaFile(urls[i])
		schemas = _.assign(schemas, tmp)
	}
	Schema.saveSchema(schemas)
}

module.exports = {
	createSchemaFiles,
	createSchemaFile
}
