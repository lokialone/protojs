const _ = require('lodash')
const axios = require('axios')
const Schema = require('./schema')
const idx = require('idx')

axios.defaults.headers.get['Cookie'] = '_security_token=1JxnP_bCwFWRGbmI'
/**
 * create swagger api schema
 * @param {*} data 数据为 ===>例如 http://topgear.prepub.souche.com/api-docs/souche/consignment-action
 * return object  {url: schema, url: schema}
 */

 /**
 * get swagger info
 * @param {*} baseUrl
 */
async function getAPiDocsInfo(baseUrl) {
	try {
		const res = await axios.get(baseUrl)
		// console.log(res);
		if (res.data) return res.data.apis
		// TODO
		// 登录souche
		// then reget docinfo

	} catch (error) {
		console.log(error)
	}
}

function dealSwaggerModelToScheme(baseUrl, data) {
	const models = data.models
	const schema = new Schema(models)
	let res = {}
	_.forEach(data.apis, (item) => {
		const api = item.path;
		// response对象
		const response = idx(item, _ => _.operations[0].type)

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
		res[api] = schema.toSchema(reData)
	})
	return res
}
/**
 * 根据api 生成 json-schema文件
 * @param {*} api
 */
async function createSchemaFile (baseUrl) {
	const docsInfo = await getAPiDocsInfo(baseUrl);
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
	await Schema.saveSchema(schemas)
}

module.exports = {
	createSchemaFile
}
