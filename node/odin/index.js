const swagger = require('./lib/Swagger')
const api = 'http://topgear.prepub.souche.com/api-docs'
const urlJsonSchema = require('./url-json-schema.json')
const Util = require('./lib/utils')
const _ = require('lodash')
const validate = require('./lib/validate')
const axios = require('axios')
const qs = require('qs')
// TODO
// 根据多个api 生成json-schema
// swagger.createSchemaFile(api)

// let testData = {
// 	id: 2,
// 	family: {
// 		son: '1111',
// 		daughter: '2'
// 	},

// 	num: [4]
// }


// validate.validateUrlData("/clue/clueQuotedAction/queryHistory.json", testData)
axios.defaults.headers.post['Cookie'] = 'JSESSIONID=D25E30CF4D611EEAC6140532C190A0E2; csrfToken=TIaK4avx1C';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.post('http://sso.dasouche.net/loginAction/login.do', qs.stringify({
	username: '15757129510',
	password: 'souche2015',
	fingerPrint: '3296157377',
	s: 'aHR0cDovL3Nob3AuZGFzb3VjaGUubmV0L3BhZ2VzL2FkbWluL2Rhc2hib2FyZC5odG1sX0BAX19AQF9odHRwOi8vc3NvLmRhc291Y2hlLm5ldA=='
})).then((res) => {
	console.log('res', res)
}).catch((e) => {
	console.error('e', e)
})

//


// console.log(Util.getUrlPath(url))







