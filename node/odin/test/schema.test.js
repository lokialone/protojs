import { formatSchema } from '../src/validate/schema.js'

describe('format Schema', () => {
	test('format Schema string', () => {
		const params = {
			hello: 'string'
		}

		const data = formatSchema(params)
		const want = {
			$type: 'object',
			$required: true,
			hello: {
				$type: 'string',
				$required: true
			}
		}
		expect(data).toEqual(want)
	})

	test('format Schema object', () => {
		const params = {
			hello: 'object'
		}

		const data = formatSchema(params)
		const want = {
			$type: 'object',
			$required: true,
			hello: {
				$type: 'object',
				$required: true
			}
		}
		expect(data).toEqual(want)
	})

	test('format Schema string enum', () => {
		const params = {
			hello: ['1', '2', '3']
		}

		const data = formatSchema(params)
		const want = {
			$type: 'object',
			$required: true,
			hello: {
				$type: 'string',
				$required: true,
				$enum: ['1', '2', '3']
			}
		}
		expect(data).toEqual(want)
	})
})
