import Raven from 'raven-js'
import idx from 'idx'
import Bragi from './bragi'
import { ERROR_TYPE, ENV } from '../const'
let archerUpload = ''

try {
	const archerTool = require('@souche-f2e/archer-tools')
	archerUpload = archerTool.upload
} catch (error) {
}

let currentEnv = ''
function report (type, data) {
	const types = {
		[ERROR_TYPE.API_DATA_ERROR]: reportApiDataError,
		[ERROR_TYPE.API_STATUS_ERROR]: reportApiStatusError,
		[ERROR_TYPE.API_PARAMS_ERROR]: reportApiParamsError,
		[ERROR_TYPE.ROUTE_RPARAMS_ERROR]: reportRouteParamsError,
		[ERROR_TYPE.API_SLOW_ERROR]: reportApiSlowError,
		[ERROR_TYPE.PAGE_SLOW_ERROR]: reportPageSlowError
	}
	types[type] ? types[type](data) : null
}
/**
 * api data error 数据上报格式
 * @param {*} data =>  api, traceId, error => { key, value }
 */
function reportApiDataError(data) {
	let key = idx(data.error, _ => _.key)
	let value = idx(data.error, _ => _.value)

	Raven
	.setExtraContext({
		api: data.api,
		key: key,
		value: value,
		traceId: data.traceId
	})
	.captureException('BusinessAPIResponseDataError', {
		logger: 'javascript',
		level: 'ERROR',
		fingerprint: [
			'{{ default }}', `res-${data.api}-${key}-${value}`
		],
		tags: {
			monitor: 'reponse'
		}
	})
}

/**
 * api status error 数据上报格式
 * @param {*} data =>  api, statusCode
 */
function reportApiStatusError(data) {
	Raven
	.setExtraContext({
		api: data.api,
		status: data.status
	})
	.captureException('BusinessAPIResponseStatusError', {
		logger: 'javascript',
		level: 'ERROR',
		fingerprint: [
			'{{ default }}', `status-${data.status}`
		],
		tags: {
			monitor: 'reponse'
		}
	})
}

/**
 * api params error 数据上报格式
 * @param {*} data =>  api, recordId(非必填), error => { key, value }
 */
function reportApiParamsError(data) {
	let key = idx(data.error, _ => _.key)
	let value = idx(data.error, _ => _.value)

	function raven(data) {
		Raven
			.setExtraContext({
				api: data.api,
				key: key,
				value: value,
				recordId: data.recordId
			})
			.captureException('BusinessAPIRequestParamsError', {
				logger: 'javascript',
				level: 'ERROR',
				fingerprint: [
					'{{ default }}', `params-${data.api}-${key}-${value}`
				],
				tags: {
					monitor: 'request'
				}
			})
	}

	if (archerUpload) {
		archerUpload().then(res => {
			data.recordId = res.recordID || ''
			raven(data)
		})
	} else {
		raven(data)
	}
}

/**
 * route params error 数据上报格式
 * @param {*} data =>  router, recordId(非必填), error => { key, value }
 */

function reportRouteParamsError(data) {
	let key = idx(data.error, _ => _.key)
	let value = idx(data.error, _ => _.value)

	function raven () {
		Raven
		.setExtraContext({
			router: data.router,
			key: key,
			value: value,
			recordId: data.recordId
		})
		.captureException('BusinessAPIRequestParamsError', {
			logger: 'javascript',
			level: 'ERROR',
			fingerprint: [
				'{{ default }}', `router-${data.router}-${key}-${value}`
			],
			tags: {
				monitor: 'router'
			}
		})
	}

	if (archerUpload) {
		archerUpload().then(res => {
			data.recordId = res.recordID || ''
			raven(data)
		})
	} else {
		raven(data)
	}
}

/**
 * api slower error 数据上报格式
 * @param {*} data =>  api, traceId, loadTime
 */

function reportApiSlowError(data) {
	Raven
	.setExtraContext({
		api: data.api,
		'waiting-time': data.loadTime,
		traceId: data.traceId
	})
	.captureException('PerformanceAPIError', {
		logger: 'javascript',
		level: 'ERROR',
		fingerprint: [
			'{{ default }}', `slow-${data.api}`
		],
		tags: {
			monitor: 'perfomance'
		}
	})
}

/**
 * page slower error 数据上报格式
 * @param {*} data =>  page,loadTime
 */
function reportPageSlowError(data) {
	Raven
	.setExtraContext({
		page: data.page,
		'waiting-time': data.loadTime
	})
	.captureException('PerformancePageError', {
		logger: 'javascript',
		level: 'ERROR',
		fingerprint: [
			'{{ default }}', `load-${data.page}`
		],
		tags: {
			monitor: 'perfomance'
		}
	})
}


function errorCapture  (type, data) {
	if (data.env !== ENV.PROD ) return;
 	Bragi.addTask(() => {
		report(type, data)
	})
}

export default errorCapture
