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

clear()
log(
    chalk.blue.bold(
      figlet.textSync('deploy-email', { horizontalLayout: 'full' })
    )
)
let emailData = {}
var run = async function () {
    try {
        let userInfo = await api.getUserInfo()
        if (!(userInfo.code == '200')) {
            let { phone } = await inquirer.askPhone()
            conf.set('phone', phone)
            await api.sendCode(data.phone)
            let token = await api.verify(data.phone, res.code)
            conf.set('token', token)
            userInfo = await api.getUserInfo()
        }
        let team = []
        let tmpTeam = {}

        const configFilePath = tool.getConfigFilePath()

        if (!fs.existsSync(configFilePath)) {
            userInfo.data.team.forEach(item => {
                team.push(item.teamName)
                tmpTeam[item.teamName] = item.id
            })
    
            let { teamName } = await inquirer.askTeamId(team)
            emailData.teamId = tmpTeam[teamName]
            let projectsData = await api.getProjects(emailData.teamId)
           
            let projectsChoice = []
            projectsData.data.forEach(item => {
                projectsChoice.push(item.projectName)
            })
    
            let { projectName } = await inquirer.askProjectId(projectsChoice)
            let projectSelected = projectsData.data.find((item) => item.projectName === projectName)
    
            emailData.projectId = projectSelected.id
        } else {
            let configData = fs.readFileSync(configFilePath, 'utf-8')
            let jsonData = JSON.parse(configData)
            emailData.teamId = jsonData.teamId
            emailData.projectId = jsonData.projectId
        }

        let data = await inquirer.askEmailInfo()
        emailData = {...data, ...emailData}
        fs.writeFileSync(tool.getConfigFilePath(), JSON.stringify(emailData), 'utf-8')
       
        
        // 发送邮件
        // await api.sendEmail(emailData)
    } catch (error) {
        console.error(error)
    } 
} 

run()