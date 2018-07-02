const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const log = console.log

// const Keys = ['projectName', 'title', 'desc','tester', 'developer', 'gitPath', 'product', 'operate', 'design']
const Tips = {
    title: '邮件主题',
    desc: '发布功能描述',
    gitPath: 'git地址(ssh)',
    tester: '测试',
    developer: '开发者',
    product: '产品',
    design: '设计',
    operate: '运营'
}

function askBasicInfo() {
    const data = fs.readFileSync(path.join(process.cwd(), 'basic-info.json'),"utf-8")
    let jsonData = JSON.parse(data)
    let result = jsonData
    let questions = []
    let keys = Tips.keys()
    keys.forEach((item) => {
        questions.push({
            name: item,
            type: 'input',
            default: jsonData[item] || '',
            message: `Enter ${Tips[item]}`,
            validate: function(value) {
                if (value.length) {
                    return true
                } else {
                    return `Please enter ${Tips[item]}`
                }
            }
        })
    })
    return inquirer.prompt(questions)
}

module.exports = {
    askBasicInfo: askBasicInfo
}


