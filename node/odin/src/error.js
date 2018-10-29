class ValidateError extends Error{
	constructor(message) {
		super()
		this.message = message
		this.name = 'ValidateError'
	}
}

export default ValidateError
