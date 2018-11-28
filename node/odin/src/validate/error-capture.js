import Raven from 'raven-js'
import Bragi from '../util/bragi'

function report (type, desc) {
	Raven.captureException(desc, {
		logger: 'javascript',
		level: 'ERROR',
		tags: {
			monitor: type
		}
	})
}


function errorCapture  ({url, code, type, error}) {
	let desc
	type !== 'route' ? desc = 'JSON Server ERROR, url = '+ url+', code =' + code : desc = 'route data ERROR'
	desc = desc + '\n\n' + error
	Bragi.addTask(() => {
		report(type, desc)
	})
}

export default errorCapture
