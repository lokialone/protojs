#!/usr/bin/env node
const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
const fs = require('fs')
const path = require('path')
const inquirer = require('./lib/inquirer')
const api = require('./lib/api')
const tool = require('./lib/tool')
const Configstore = require('configstore')
const pkg = require('./package.json')
const conf = new Configstore(pkg.name)

const log = console.log

// clear()
log(
    chalk.blue.bold(
      figlet.textSync('deploy-email', { horizontalLayout: 'full' })
    )
)
let emailData = {}
let userInfo = {}
const configFilePath = tool.getConfigFilePath()

async  function login() {
   try {
        userInfo = await api.getUserInfo()
   } catch (e) {
        let { phone } = await inquirer.askPhone()
        conf.set('phone', phone)

        await api.sendCode(phone)
        let { code } = await inquirer.askCode()
        await api.verify(phone, code)
        userInfo = await api.getUserInfo()
   }
}

function saveInfo  (data) {
    let saveData = { ...emailData }
    saveData.tag = undefined
    saveData.desc = undefined
    saveData.time = undefined
    fs.writeFileSync(tool.getConfigFilePath(), JSON.stringify(saveData, null, 2), 'utf-8')
}

async function getProjectInfoByAsk() {
    let team = []
    try {
        userInfo.team.forEach(item => {
            team.push(item.teamName)
        })
        let { teamName } = await inquirer.askTeamId(team)
        let teamSeleted =  userInfo.team.find((item) => item.teamName === teamName)
        emailData.teamId = teamSeleted.id
        let projectsData = await api.getProjects(emailData.teamId)
        
        let projectsChoice = []
        projectsData.forEach(item => {
            projectsChoice.push(item.projectName)
        })
        // TODO 判空
        let { projectName } = await inquirer.askProjectId(projectsChoice)
        let projectSelected = projectsData.find((item) => item.projectName === projectName)
    
        emailData.projectId = projectSelected.id
        emailData.gitPath = projectSelected.gitPath
    } catch(e) {
        console.error(e)
    }
}
async function getProjectInfoByFile () {
    // 获取当前file项目基本信息
    let configData = fs.readFileSync(configFilePath, 'utf-8')
    let jsonData = JSON.parse(configData)
    emailData.teamId = jsonData.teamId
    emailData.projectId = jsonData.projectId
    emailData.gitPath = jsonData.gitPath

}

async function getEmailInfo() {
    try {
        let tmpTagData = await api.getTagList(emailData.gitPath)
        let tag = tmpTagData[0] || {name: '', message: ''};
        let data = await inquirer.askEmailInfo(tag.name, tag.message)
        emailData = {...data, ...emailData}
    } catch (e) {
        console.error(e)
    }
}

async function run  () {
    try {
        // 登录
        await login()
    
        // 获取当前项目基本信息
        if (fs.existsSync(configFilePath)) {
            getProjectInfoByFile()
        } else {
            await getProjectInfoByAsk()
        }

        await getEmailInfo()
        // 保存固定的信息
        saveInfo()
        // 发送邮件
        await api.sendEmail(emailData)
    } catch (error) {
        console.error(error)
    } 
} 

run()