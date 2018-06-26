const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
const readline = require('readline')
const fs = require('fs')
const path = require('path')
const inquirer = require('./lib/inquirer')
const checkInfo = require('./lib/check-init-info')
const http = require('http');
// const files = require('./lib/files')
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

function getEmailGroup() {
    rl.on('line', (line) => {
        emailGroup.push(line)
    });
}

getEmailGroup()
inquirer.askBasicInfo()

checkInfo.init()