const axios = require('axios')
const _ = require('lodash')
const idx = require('idx')
const testData = require('./testData')

const baseUrl = 'http://topgear.prepub.souche.com/api-docs/'

axios.defaults.headers.get['Cookie'] = '_security_token=1JxnP_bCwFWRGbmI'

/**
 *
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

// TODO
// 登录souche
function login() {

}

async function init () {
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
}

// init();
/**
 * create api schema
 * @param {*} data
 * return object
 */
let allModel = {}
function createSchema(data) {
	const api = idx(data, _ => _.apis[0].path);
	// response对象
	const response = idx(data, _ => _.apis[0].operations[0].type)
	allModel = data.models

	if (!api || !response || !allModel) {
		console.error('解析api model出错: ' + api + response)
		return {}
	}

	//response data 对象 需要验证的对象
	const reData= idx(allModel, _ => _[response].properties.data)
	if (!reData) {
		console.error('未返回shcema: ' + api + reData)
	}
	console.log('result', dealSchema(reData));
}



function dealSchema(data, schema = {}) {
	if (_.isUndefined(data)) return schema

	if (_.has(data, 'properties')) {
		_.forOwn(data.properties, (value, key) => {
			console.log('key', key)
			schema[key] = {}
			dealSchema(value, schema[key])
		})
	}
	// 拥有id表示是model里自定义的对象
	if (_.has(data, 'id')) {
		schema[data.type] = {}
		dealSchema(allModel[data.type], schema[data.type])
	}

	if (data.type === 'array' && _.has(data, 'items')) {
		schema.type = 'array'
		schema.items = {}
		dealSchema(data.items, schema.items)
	}

	data.type ? schema.type = data.type : null

	return schema
}

// createSchema(testData)
console.log('result', dealSchema(
	{
		properties: {
			id: {
				type: 'string'
			},
			name: {
				type: 'string'
			}
		}
	}
))





