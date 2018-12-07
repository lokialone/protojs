
import idx from 'idx'
import Vue from 'vue'
import Bragi from '../util/bragi.js'
import { ENV, ERROR_TYPE } from '../const'
import errorCapture from '../util/report'
import axios from 'axios'
import store from 'store'

const Thor = {}
let startTime = ''
let routeBegintime = Date.now()
// 默认阈值
const default_threshold = 800
/**
 * router必填 env Http 选填
 * @param {*} opts
 */


Thor.init = function (opts){
	this.env = opts.env || ENV.DEV
	this.projectName = opts.name
	this.router = opts.vueRouter
	this.http = opts.httpRequest
	this.threshold = store.get('Threshold') || {
		requestThreshold: default_threshold,
		loadingThreshold: default_threshold
	}
	this.perf = window.performance || window.webkitPerformance
	if (this.perf) {
		startTime = this.perf.timing.fetchStart
		this.ajaxPerfInfo = []
		if (this.http) this.httpRequestPref()
	}
	Bragi.addTask(() => {
		this.getRemoteThreshold()
	})
	this.pageMountPerf()


}

/**
 * 计算单页面 router before 到 vue mounted()的时间
 * 不计算子路由跳转
 * @param {*} params
 */
Thor.pageMountPerf = function () {
	this.router.beforeEach((to, from, next) => {
		startTime ? routeBegintime = startTime : routeBegintime = Date.now()
		next()
	})
	let that = this
	Vue.mixin({
		mounted () {
			if (isPageComponent(this)) {
				startTime = ''
				console.log('router 跳转-> mount 时间:', Date.now() - routeBegintime, 'ms')
				Bragi.addTask(() => {
					that.report(ERROR_TYPE.PAGE_SLOW_ERROR, {page: window.location.pathname + window.location.hash, loadTime:  Date.now() - routeBegintime, env: that.env})
				})
			}

		}
	})
}

function isPageComponent(vm) {
	return vm.$root._uid === idx(vm, _ => _.$parent.$parent._uid)
}

/**
 * httpRequest 耗时记录
 */
Thor.httpRequestPref = function () {
	if (!this.perf && !this.http && !this.projectName) return
	this.http.afterEach((res) => {
		const url = res.params.url
		const traceId = res.json.traceId
		this.ajaxPerfInfo.push({url, traceId})
		Bragi.addTask(() => {
			this._ajaxPerf()
		})
	})
}
/**
 * axios 耗时记录
 */
Thor.axiosPerf = function(res) {
	if (!this.perf && !this.projectName) return
	const url = res.config.url
	const traceId = idx(res.data, _ => _.response.traceId)
	this.ajaxPerfInfo.push({url, traceId})
	Bragi.addTask(() => {
		this._ajaxPerf()
	})
}

Thor._ajaxPerf = function () {
	const resource = this.perf.getEntries()
	const data = this.ajaxPerfInfo.pop()
	for(let i = resource.length - 1; i > 0; i--) {
		if(resource[i].name === data.url) {
			this.report(ERROR_TYPE.API_SLOW_ERROR, {api: data.url, loadTime: resource[i].duration, env: this.env, traceId: data.traceId})
			return
		}
	}
}


Thor.report = async function(type, data) {
	const maps ={
		[ERROR_TYPE.API_SLOW_ERROR]: 'requestThreshold',
		[ERROR_TYPE.PAGE_SLOW_ERROR]: 'loadingThreshold'
	}
	if (data.loadTime < this.threshold[maps[type]]) return
	errorCapture(type, data)
}
Thor.AppReport = function () {
//
}

/**
 * 获取线上阈值
 */
Thor.getRemoteThreshold = function() {
	axios.get('http://assets.souche.com/projects/wireless-configuration-online/monitor/dfc-shangjiache-pc/test/performance.json').then((res) => {
		store.set('Threshold', res.data)
	}).catch(err => {
		console.error(err)
	})
}

export default Thor
