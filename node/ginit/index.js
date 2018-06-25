const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
const inquirer = require('./lib/inquirer')
const files = require('./lib/files')
const log = console.log

clear();
log(
  chalk.blue.bold(
    figlet.textSync('Ginit', { horizontalLayout: 'full' })
  )
);
if (files.directoryExists('.git')) {
    log(chalk.red('Already a git repository!'))
    process.exit()
}

const run = async () => {
    const credentials = await inquirer.askGithubCredentials()
    log(credentials)
}

run()