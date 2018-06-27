const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
const readline = require('readline')
const fs = require('fs')
const path = require('path')
const inquirer = require('./lib/inquirer')
const checkInfo = require('./lib/check-init-info')
const http = require('http')
const CLI = require('clui')
const Spinner = CLI.Spinner
var countdown = new Spinner('发送请求中  ', ['⣾','⣽','⣻','⢿','⡿','⣟','⣯','⣷']);

const log = console.log

const rl = readline.createInterface({
    input: fs.createReadStream(path.join(process.cwd(), 'email-group.txt'))
});

let emailGroup = []

clear()
log(
    chalk.blue.bold(
      figlet.textSync('deploy-email', { horizontalLayout: 'full' })
    )
)
// 获取邮件组
// function getEmailGroup() {
//     rl.on('line', (line) => {
//         emailGroup.push(line)
//     });
// }

// getEmailGroup()

// 输入项目信息
// inquirer.askBasicInfo()

// checkInfo.init()
countdown.start()
setTimeout(() => {
    log(
        chalk.blue.bold('验证码发送成功')
    )
    countdown.stop()
}, 2000);

// http.get('http://sso.dasouche-inc.net/PhoneCode.json?username=15757129510&isDingDing=true', function(res) { 
//     if (res.statusCode == '200') {
//         log(
//             chalk.blue.bold('验证码发送成功')
//         )
//     }
//   }).on('error', function(e) {
//     log(
//         chalk.red.bold(e.message)
//     )
//   })

http.post('http://sso.dasouche-inc.net/loginAction/phoneCheck.do')