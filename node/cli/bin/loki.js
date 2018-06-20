const program = require('commander')  // npm i commander -D
const config = require('../package.json')
program.version(config.version, '-v, --version')
	.usage('<command> [项目名称]')
	.command('hello', 'hello')
	.command('init', 'init project')
	.parse(process.argv)