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
    let projectDesc = JSON.stringify([{
        teamId: res.teamId,
        id: res.projectId,
        tagType: res.tag,
        developmenter: res.developmenter,
        tester: res.tester,
        product: res.product,
        desc: res.desc,
        design: res.design,
        operate: res.operate  
    }])
    let data = {
        recipients: 'shantingting@souche.com',
        emailTeams:'', 
        title: res.title,
        desc: res.desc,
        time: res.time,
        projects: projectDesc,
        token: res.token
    }
    
    return new Promise((resolve, reject) => {
        axios.post('http://robben.souche-inc.com/f2e-robben/publish/send.json', qs.stringify(data)).then((res) => {
            countdown.stop()
            if (res.data.success) {
                resolve()
                log(
                    chalk.blue.bold('邮件发送成功')
                )
            }
            reject(new Error(res.data.msg))
        }).catch((e) => {
            countdown.stop()
            reject(e)
        })
    }) 
}

function getUserInfo() {
    axios.defaults.headers.post['Cookie'] = `isDingDing=true; _security_token_inc=${conf.get('token')}`;
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    return new Promise((resolve, reject) => {
        axios.post('http://robben.souche-inc.com/f2e-robben/validUserInfo.json').then((res) => {
            if (res.data.code == '200') {
                resolve (res.data.data)
            }
            reject(new Error('无法登录'))
        }).catch((e) => {
            reject(e)
        })
    })   
}

function getProjects(teamId) {
    return new Promise((resolve, reject) => {
        axios.post('http://robben.souche-inc.com/f2e-robben/publish/project/search.json', qs.stringify({ teamId })).then((res) => {
            resolve (res.data.data)
        }).catch((e) => {
            reject({code: '500'})
            console.log(e)
        })
    })  
}
/**
 * 获取下一个发布的版本
 */
function getTagList(id) {
    return new Promise((resolve, reject) => {
        axios.post('http://robben.souche-inc.com/git/getNextTag.json', qs.stringify({ id })).then((res) => {
            resolve (res.data.data)
        }).catch((e) => {
            reject()
            console.log(e)
        })
    })  
}

module.exports = {
    sendCode: sendCode,
    verify: verify,
    sendEmail: sendEmail,
    getUserInfo: getUserInfo,
    getProjects: getProjects,
    getTagList: getTagList
}