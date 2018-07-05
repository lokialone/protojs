const inquirer = require('inquirer')
const moment = require('moment')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const Configstore = require('configstore')
const pkg = require('../package.json')
const conf = new Configstore(pkg.name)
const log = console.log

const tool = require('./tool.js')
const Tips = {
    title: '邮件主题',
    tag: '发布版本',
    desc: '发布功能描述',
    time: '发布时间',
    tester: '测试',
    developmenter: '开发者',
    product: '产品',
    design: '设计',
    operate: '运营'
}

function askEmailInfo(tag, desc) {
    const configFilePath = tool.getConfigFilePath()
    if (!fs.existsSync(configFilePath)) {
        let tmp = {}
        for (item in Tips) {
            tmp[item] = ''
        }
        try {
            fs.writeFileSync(configFilePath, JSON.stringify(tmp))
        } catch(e) {
            console.error(e)
        }
    } 
    let data = fs.readFileSync(configFilePath, 'utf-8')
    let jsonData = JSON.parse(data)
    let result = jsonData
    let questions = []
    for (item in Tips) {
        let defaultValue = jsonData[item] || ''
        if (item === 'desc') {
            defaultValue = desc
        } else if (item === 'time') {
            defaultValue = moment().format('YYYY-MM-DD hh:mm:ss')
        } else if (item === 'tag') {
            defaultValue = tag
        }

        questions.push({
            name: item,
            type: 'input',
            default: defaultValue,
            message: `${Tips[item]}`,
            validate: function(value) {
                if (value.length) {
                    return true
                } else {
                    return  '请输入'
                }
            }
        })
    }
    return inquirer.prompt(questions)
}

function askTeamId(choices) {
    return inquirer.prompt([{
        name: 'teamName',
        type: 'list',
        message: '选择业务小组',
        choices: choices,
        default: choices[0]
    }])
}

function askProjectId(choices) {
    return inquirer.prompt([{
        name: 'projectName',
        type: 'list',
        message: '选择项目名称',
        choices: choices
    }])
}

function askCode () {
    return inquirer.prompt([{
        name: 'code',
        type: 'input',
        message: '验证码',
        validate: function(value) {
            if (value.length) {
                return true
            } else {
                return  '请输入'
            }
        }
    }])
}
function askPhone () {
    return inquirer.prompt([{
        name: 'phone',
        type: 'input',
        message: '手机号',
        default: conf.get('phone'),
        validate: function(value) {
            if (value.length) {
                return true
            } else {
                return  '请输入'
            }
        }
    }])
}

module.exports = {
    askPhone: askPhone,
    askEmailInfo: askEmailInfo,
    askCode: askCode,
    askTeamId: askTeamId,
    askProjectId: askProjectId
}


