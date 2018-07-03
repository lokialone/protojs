const axios = require('axios')
const qs = require('qs')
const chalk = require('chalk')
const CLI = require('clui')
const Spinner = CLI.Spinner
var countdown = new Spinner('发送请求中  ', ['⣾','⣽','⣻','⢿','⡿','⣟','⣯','⣷'])
const tool = require('./tool')
const Configstore = require('configstore')
const pkg = require('../package.json')
const conf = new Configstore(pkg.name)
const log = console.log

function sendCode (phone) {
    countdown.start()
    return new Promise((resolve, reject) => {
        axios.get(`http://sso.souche-inc.com/PhoneCode.json?username=${phone}&isDingDing=true`).then((res) => {
            countdown.stop()
            if (res.data.success) {
                resolve()
                log(
                    chalk.blue.bold('验证码发送成功')
                )
            }
            reject(res.msg)
        }).catch((e) => {
            countdown.stop()
            console.error(e)
            reject(e)
        })
    })
}

function verify (phone, code) {
    countdown.start() 
    return new Promise((resolve, reject) => {
        axios.post('http://sso.souche-inc.com/loginAction/phoneCheck.do', qs.stringify({
            username: phone,
            code: code,
            isDingDing: true,
            s: 'aHR0cDovL3JvYmJlbi5zb3VjaGUtaW5jLmNvbQ=='
        })).then((res) => {
            countdown.stop()
            var token = tool.getToken(res.data)
            conf.set('token', token)
            resolve()
            log(
                chalk.blue.bold('登录成功')
            )
        }).catch((e) => {
            countdown.stop()
            console.error(e)
            reject()
        })
    }) 
}

function sendEmail(res) {
    countdown.start()
    const packageConfig = require(tool.getCurrentPath('package.json'))
    let data = {
        title: res.title,
        desc: res.desc,
        time: res.time,
        token: conf.get('token'),
        projects: JSON.stringify([{
            teamId: res.teamId,
            id: res.projectId,
            tag: packageConfig.version,
            developmenter: res.developmenter,
            tester: res.tester,
            product: res.product,
            desc: res.desc
        }])
    }
    return new Promise((resolve, reject) => {
        axios.post('http://robben.souche-inc.com/f2e-robben/publish/send.json', qs.stringify(data)).then((res) => {
            countdown.stop()
            console.log(res.data);
            if (res.data.success) {
                resolve()
                log(
                    chalk.blue.bold('邮件发送成功')
                )
            }
            reject()
        }).catch((e) => {
            console.error(e)
            reject()
        })
    }) 
}

function getUserInfo() {
    axios.defaults.headers.post['Cookie'] = `isDingDing=true; _security_token_inc=${conf.get('token')}`;
    return new Promise((resolve, reject) => {
        axios.post('http://robben.souche-inc.com/f2e-robben/validUserInfo.json').then((res) => {
            resolve ({code: res.data.code, data: res.data.data})
        }).catch((e) => {
            reject({code: '500'})
            console.error(e)
        })
    })   
}

function getProjects(teamId) {
    return new Promise((resolve, reject) => {
        axios.post('http://robben.souche-inc.com/f2e-robben/publish/project/search.json', qs.stringify({ teamId })).then((res) => {
            resolve ({code: res.data.code, data: res.data.data})
        }).catch((e) => {
            reject({code: '500'})
            console.log(e)
        })
    })  
}

module.exports = {
    sendCode: sendCode,
    verify: verify,
    sendEmail: sendEmail,
    getUserInfo: getUserInfo,
    getProjects: getProjects

}