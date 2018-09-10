
const auth = require('../lib/auth')
const util = require('../lib/utils')
const Schema = require('../lib/schema')
const path = require('path')
const  glob = require("glob")
const fs = require('fs')

function removeApi() {
	let apis = []
	glob(util.getCurrentPath('src/api/**/*.js'), {}, function (er, files) {
		// files is an array of filenames.
		// If the `nonull` option is set, and nothing
		// was found, then files is ["**/*.js"]
		// er is an error object or null.
		if (er) console.error(er)

		try {
			files.forEach((item) => {
				const data = fs.readFileSync(item, 'utf-8')
				let re = /[\w//]+\.jsonp?/g
				var arr = data.match(re)
				if (arr) apis = apis.concat(arr)
			})
			if (!apis.length) throw new Error('未匹配到api, api文本匹配规则为' + re)
			Schema.removeUnUseSchema(apis)
		} catch (error) {
			console.log(error)
		}
	})

}

module.exports = {
	removeApi,
	removeUserInfo: () => {
		auth.removeUserInfo()
	},
	removeToken: () => {
		auth.removeToken()
	}
}
