const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const log = console.log

function checkInfo () {
    const emailGroupFile = fs.readFileSync(path.join(process.cwd(), 'email-group.txt'),"utf-8")
    if (!emailGroupFile) {
        log(chalk.red.bold('请先初始化email-group文件'))
        return false
    } else {
        
    }
}

module.exports = {
    init: checkInfo
}
