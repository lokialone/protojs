/**
 * 数据上报队列
 * 浏览器空闲时执行队列里的函数
 * 使用 requestIdCallback 检测空闲时间
 */

class Bragi {
	constructor() {
		this.taskList = []
		this.callbackId = null
		this.shimIdleCallback()
	}

	doTask(deadline) {
		while ((deadline.timeRemaining() > 0 || deadline.didTimeout) && this.taskList.length > 0) {
			let task = this.taskList.pop()
			console.log('do-task', task)
			if (task) task()
		}
		if (this.callbackId) {
			window.cancelIdleCallback(this.callbackId)
			this.callbackId = null
		}
	}

	addTask(item) {
		this.taskList.push(item)
		if (this.callbackId) return
		this.callbackId = window.requestIdleCallback((deadline) => this.doTask(deadline))
	}

	/**
 	* requestIdCallback and cancelIdleCallback shim
 	*/
	shimIdleCallback() {
		window.requestIdleCallback = window.requestIdleCallback ||
		function (cb) {
			return setTimeout(function () {
			let start = Date.now()
			cb({
				didTimeout: false,
				timeRemaining: function () {
				return Math.max(0, 50 - (Date.now() - start));
				}
			})
			}, 1)
		}

		window.cancelIdleCallback = window.cancelIdleCallback ||
			  function (id) {
				clearTimeout(id)
		}
	}
}

export default new Bragi()
