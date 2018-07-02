const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
const readline = require('readline')
const fs = require('fs')
const path = require('path')
const tag = require('./lib/tag.js');
const inquirer = require('./lib/inquirer')
const http = require('http')

const CLI = require('clui')

const Spinner = CLI.Spinner
var countdown = new Spinner('发送请求中  ', ['⣾','⣽','⣻','⢿','⡿','⣟','⣯','⣷']);
var exec = require('child_process').exec;


const log = console.log


clear()
log(
    chalk.blue.bold(
      figlet.textSync('deploy-email', { horizontalLayout: 'full' })
    )
)
// 输入项目信息
inquirer.askBasicInfo()

//  'http://robben.dasouche-inc.net/f2e-robben/sendEmail.json'
    
