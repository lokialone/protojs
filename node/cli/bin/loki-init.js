const program = require('commander')
const path = require('path')
const fs = require('fs')
const glob = require('glob') // npm i glob -D
const download = require('./download')
const inquirer = require('inquirer')
const generator = require('./generator')
const ncp = require('ncp').ncp;

program.usage('<project-name>').parse(process.argv)

// 根据输入，获取项目名称
let projectName = program.args[0]

if (!projectName) {  // project-name 必填
  // 相当于执行命令的--help选项，显示help信息，这是commander内置的一个命令选项
  program.help() 
  return
}

//决定是否能够创建当前文件
const list = glob.sync('*')  // 遍历当前目录
let rootName = path.basename(process.cwd())
let downloadTemp = path.basename(process.cwd())
if (list.length) {  // 如果当前目录不为空
    if (list.filter(name => {
        const fileName = path.resolve(process.cwd(), path.join('.', name))
        const isDir = fs.statSync(fileName).isDirectory()
        return name.indexOf(projectName) !== -1 && isDir
      }).length !== 0) {
      console.log(`项目${projectName}已经存在`)
      return
    }
    rootName = projectName
    } else if (rootName === projectName) {
        rootName = '.'
    } else {
        rootName = projectName
    }

// uesr 交互
inquirer.prompt([
    {
      name: 'name',
      message: '项目的名称',
      default: 'hello'
    }, {
      name: 'version',
      message: '项目的版本号',
      default: '1.0.0'
    }, {
      name: 'description',
      message: '项目的简介',
      default: `A project named hello`
    }
  ]).then(answers => {
        go(answers)
});

// /Users/lokalone/code/tech/vue/vue-template/
function go (answers) {
    // git clone from git
    // download('lokialone/vue-template#master', rootName)
    // .then(target => console.log(target))
    // .catch(err => console.log(err))
    
    // copy from local
    // 目标文件需要去除.git generator是会出错
    ncp('/Users/lokalone/code/tech/vue/vue-template', rootName, function (err) {
        if (err) {
          console.error(err);
        } else {
          generator(answers, rootName, 'build')
        }
    });

}