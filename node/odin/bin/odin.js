#!/usr/bin/env node
const program = require('commander')
const config = require('../package.json')

function list(val) {
	return val.split(',');
}
program.version(config.version, '-v, --version')
	.usage('init -a api1,api2 create api schema')
	.command('init [options]', 'create api schema')
	.option('-a, --api <items>', 'Api lsit', list)
	.action((name, cmd) => {
		require('./odin-init')(cmd.api)
	})

program.command('rm-api', 'remove unuse api inproject')
	.action(() => {
	})

program.command('rm-info', 'remove userinfo')

program.parse(process.argv)


