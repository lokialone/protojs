const swagger = require('../lib/swagger')
const inquirer = require('../lib/inquirer')
const auth = require('../lib/auth')

async function init(apis) {
	try {
		if (!auth.checkUserInfo()) {
			console.log('请输入http://sso.dasouche.net/login.htm 的用户名密码');
			let { username } = await inquirer.askUsername()
			let { password } =  await inquirer.askPassword()
			auth.setUserInfo(username, password)
		}
		swagger.createSchemaFiles(apis)
	} catch (error) {
		console.error(error)
	}

}

// init(['http://topgear-test1.dasouche.net/api-docs'])
module.exports = (args) => {
	return init(args)
}

