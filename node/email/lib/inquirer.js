const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const log = console.log

const Keys = ['projectName', 'version', 'testers', 'developers']
function askBasicInfo() {
    const data = fs.readFileSync(path.join(process.cwd(), 'basic-info.json'),"utf-8")
    if (!data) {
        log(chalk.red.bold('请先初始化email-group文件'))
        return false
    }
    let jsonData = JSON.parse(data)
    let result = jsonData
    let questions = []
    Keys.forEach((item) => {
        questions.push({
            name: item,
            type: 'input',
            default: jsonData[item] || '',
            message: `Enter ${item}`,
            validate: function(value) {
                if (value.length) {
                    return true
                } else {
                    return `Please enter ${item}`
                }
            }
        })
    })
    return inquirer.prompt(questions)
}

module.exports = {
    askBasicInfo: askBasicInfo
}


