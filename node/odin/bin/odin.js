#!/usr/bin/env node
const program = require('commander')
const config = require('../package.json')

const chalk = require('chalk')
const semver = require('semver')
const requiredVersion = require('../package.json').engines.node

function checkNodeVersion (wanted, id) {
  if (!semver.satisfies(process.version, wanted)) {
    console.log(chalk.red(
      'You are using Node ' + process.version + ', but this version of ' + id +
      ' requires Node ' + wanted + '.\nPlease upgrade your Node version.'
    ))
    process.exit(1)
  }
}

checkNodeVersion(requiredVersion, 'odin')

function list(val) {
	return val.split(',');
}
program.version(config.version, '-v, --version')
	.usage('init -a api1,api2 create api schema')
	.command('init [options]')
	.description('init api schema')
	.option('-a, --api <items>', 'Api lsit', list)
	.action((name, cmd) => {
		require('./odin-init')(cmd.api)
	})

program.command('rm-api')
	.description('remove unuse api inproject')
	.action(() => {
		require('./odin-rm').removeApi()
	})

program.command('rm-info')
	.description('remove userinfo')
	.action(() => {
		require('./odin-rm').removeUserInfo()
	})

program.command('rm-token')
	.description('remove token')
	.action(() => {
		require('./odin-rm').removeToken()
	})

program.parse(process.argv)


