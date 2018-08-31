const swagger = require('./lib/Swagger')
const api = 'http://topgear-test1.dasouche.net/api-docs'
const _ = require('lodash')
// const validate = require('./lib/validate')
const inquirer = require('./lib/inquirer')
const auth = require('./lib/auth')

async function init() {
	if (!auth.checkUserInfo()) {
		console.log('请输入http://sso.dasouche.net/login.htm 的用户名密码');
		let { username } = await inquirer.askUsername()
		let { password } =  await inquirer.askPassword()
		auth.setUserInfo(username, password)
	}
	swagger.createSchemaFile(api)
}

// init()








