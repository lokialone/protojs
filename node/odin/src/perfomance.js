
import idx from 'idx'
import Vue from 'vue'
import Bragi from './report.js'

const Thor = {}
let startTime = ''
let routeBegintime = Date.now()

/**
 * router必填 env Http 选填
 * @param {*} opts
 */
Thor.init = function (opts){
	this.env = opts.env || 'dev'
	this.router = opts.router
	this.ajaxPerfInfo = []
	this.http = opts.Http
	this.perf = window.performance || window.webkitPerformance
	if (this.perf) startTime = this.perf.timing.fetchStart

	this.pageMountPerf()
	this.ajaxPref()

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
					that.report({url: window.location.href, stateTime: routeBegintime, endTime: Date.now()})
				})
			}

		}
	})
}

function isPageComponent(vm) {
	return vm.$root._uid === idx(vm, _ => _.$parent.$parent._uid)
}

/**
 * ajax 耗时记录
 */
Thor.ajaxHttpPref = function () {
	this.http.afterEach((res) => {
		const url = res.params.url
		this.ajaxPerfInfo.push(url)
		Bragi.addTask(() => {
			this._ajaxPerf()
		})
	})
}

Thor.ajaxPref = function () {
	if (!this.perf && !this.http) return
	this.ajaxHttpPref()
}

Thor.axiosPerf = function(res) {
	if (!this.perf) return
	const url = res.config.url
	this.ajaxPerfInfo.push(url)
	Bragi.addTask(() => {
		this._ajaxPerf()
	})
}

Thor._ajaxPerf = function () {
	const startTime = this.perf.timeOrigin;
	const resource = this.perf.getEntries()
	const url = this.ajaxPerfInfo.pop()
	for(let i = resource.length - 1; i > 0; i--) {
		if(resource[i].name === url) {
			console.log(url, resource[i].duration)
			this.report('')
			return
		}
	}
}

/**
 * 数据上报
 */
Thor.report = function(opts) {
	// TODO
	console.log('report')
	if (this.env === 'dev') return
}


Thor.h5Report = function() {
//
}

Thor.AppReport = function () {
//
}

export default Thor
