/**
 * 询问用户信息
 */
const inquirer = require('inquirer')

function askPassword () {
    return inquirer.prompt([{
        name: 'password',
        type: 'password',
        message: '密码'
    }])
}

function askUsername () {
    return inquirer.prompt([{
        name: 'username',
        type: 'input',
        message: '手机号'
    }])
}

module.exports = {
	askUsername,
	askPassword
}
