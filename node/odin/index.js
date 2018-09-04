const validate = require('./lib/validate')
const Raven = require('raven')
Raven
	.config('https://25ef59645c8f490282651137ee167a1b:7e0b5bd8380a46768b3521955bc2a188@sentry.souche-inc.com/247')
	.install()

var testData ='dddddd'

validate.validateUrlData({
	Raven,
	url: 'http://topgear-test1.dasouche.net/consignment/consignmentAction/getStock.json',
	data: testData
})


module.exports = {
	validate
}










