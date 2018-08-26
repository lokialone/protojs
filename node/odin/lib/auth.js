/**
 * TODO
 * 通用模块
 * 不同环境的大搜车授权登录模块(dev, prepub, prod)
 * 获取搜车域名下的api-docs需要的权限验证
 */
const axios = require('axios')
const chalk = require('chalk')
const CLI = require('clui')
const Spinner = CLI.Spinner
var countdown = new Spinner('发送请求中  ', ['⣾','⣽','⣻','⢿','⡿','⣟','⣯','⣷'])

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
