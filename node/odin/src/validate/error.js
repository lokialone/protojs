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
	}
}

export default ValidateError
