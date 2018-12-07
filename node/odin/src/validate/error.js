/**
 * 自定义错误
 * @class ValidateError
 * @extends {Error}
 */
class ValidateError extends Error{
	constructor(message) {
		super()
		this.message = message
		this.name = 'ValidateError'
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, ValidateError)
		}

	}
	/**
	 * 错误message 信息为 key,actuall value,realvalue
	 * @static
	 * @param {*} message
	 * @memberof ValidateError
	 * @return
	 */
	static printError(type, url, message) {
		console.error(type + url + ' '+ message.key + ' ' + 'should be ' + message.shouldType + ' '+ 'actually get' + ' '+ message.getType)
	}
}

export default ValidateError
