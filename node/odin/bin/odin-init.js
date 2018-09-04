const swagger = require('../lib/swagger')
const inquirer = require('../lib/inquirer')
const auth = require('../lib/auth')

async function init(apis) {
	console.log('get apis info...')
	if (!auth.checkUserInfo()) {
		console.log('请输入http://sso.dasouche.net/login.htm 的用户名密码');
		let { username } = await inquirer.askUsername()
		let { password } =  await inquirer.askPassword()
		auth.setUserInfo(username, password)
	}
	swagger.createSchemaFiles(apis)
}

module.exports = (...args) => {
	init(...args)
}

