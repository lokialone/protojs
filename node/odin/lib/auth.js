/**
 * 通用模块
 * 不同环境的大搜车授权登录模块(dev, prepub, prod)
 * 获取搜车域名下的api-docs需要的权限验证
 *
 * 测试环境登录流程
 * 首先访问 http://sso.dasouche.net/login.htm' 获取到csrfToken
 * 参数 username, password, header 设置refer为 http://sso.dasouche.net/login.htm , Cookie带上csrfToken后
 * 请求http://sso.dasouche.net/loginAction/login.do,获取页面里的security_token
 *
 * TODO
 * 预发环境登录流程
 * 暂未使用未知- -
 *
 * 正式环境登录流程
 *  http://sso.souche-inc.com/PhoneCode.json?username=${phone}&isDingDing=true 发送钉钉消息
 *  http://sso.souche-inc.com/loginAction/phoneCheck.do 获取页面里返回的security_token
 **/

const axios = require('axios')
const qs = require('qs')
const CLI = require('clui')
const Spinner = CLI.Spinner
const Configstore = require('configstore')
const pkg = require('../package.json')
const conf = new Configstore(pkg.name)

var countdown = new Spinner('发送请求中  ', ['⣾','⣽','⣻','⢿','⡿','⣟','⣯','⣷'])

const SSO_DEV_lOGIN_HTML = 'http://sso.dasouche.net/login.htm'
const SSO_DEV_lOGIN_API = 'http://sso.dasouche.net/loginAction/login.do'


/**
 * 提取页面里的security_token
 * @param {*} res
 */
function getHtmlToken (res){
	var arr = res.match(new RegExp('sid=([^"]*)'))
	return arr[1]
}
/**
 * 获取测试环境csrfToken
 * @returns
 */
async function getTestCsrfToken() {
	console.log('try get crsftoken....')
	try {
		let res = await axios.get(SSO_DEV_lOGIN_HTML)
		console.log(' get crsftoken success!')
		return res.headers['set-cookie'][0]
	} catch (e) {
		console.error('getTestCsrfToken' + e)
		console.error(`请确认网络,并且处于内网环境, 访问${SSO_DEV_lOGIN_HTML} 查看是否有问题`)
	}
}
/**
 *
 * 获取 http://sso.dasouche.net/loginAction/login.do 返回的页面内容
 * @param {*} username
 * @param {*} password
 * @param {*} csrfToken
 * @returns
 */
async function getToken(csrfToken) {
	axios.defaults.headers.post['Cookie'] = csrfToken
	axios.defaults.headers.post['Referer'] = SSO_DEV_lOGIN_HTML
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
	console.log('try get token...')
	try {
		let res =  await axios.post(SSO_DEV_lOGIN_API, qs.stringify({
			username: conf.get('username'),
			password: conf.get('password'),
		}))
		console.log('res', res)
		let token = getHtmlToken(res.data)
		conf.set('token', token)
		console.log('get token success')
		return res
	} catch (error) {
		console.error('login fail' + error)
	}
}
/**
 * 测试环境登入
 * @param {*} username
 * @param {*} password
 */
async function loginTest(username, password) {
	try {
		let csrf = await getTestCsrfToken()
		let token = await getToken(csrf)

		return token
	} catch (e) {
		console.error(e)
	}
}
/**
 * 检验本地用户名，密码是否存在
 */
function checkUserInfo() {
	if(!conf.get('username') || !conf.get('password')) return false
	return true
}

/**
 * 存储本地用户名，密码
 */
function setUserInfo(username, password) {
	conf.set('username', username)
	conf.set('password', password)
}

/**
 *移除本地用户信息
 */

function removeUserInfo() {
	conf.clear()
}

module.exports = {
	loginTest,
	checkUserInfo,
	setUserInfo,
	removeUserInfo
}






