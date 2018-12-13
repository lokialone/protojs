import { validate } from '../src/validate/validate.js'

import { getTypeOf } from '../src/util/tool.js'

/**
 * 校验custom Eorrr name 是否正确
 * jest 有 expect(fn).toThrow(customError), 但是这个需要error messge一致。
 * 故自己try catch error
 * @param {function} fn
 * @param {object} schema
 * @param {*} data
 * @param {string}
 */
function validateErrorTool(schema, data, key = 'data') {
	try {
		validate(schema, data, key)
	} catch (error) {
		expect(error.name).toBe('ValidateError')
		return
	}
	expect(0).toBe(1)
}

describe('validateString', () => {
	describe('validateString $enum', () => {
		const schema = {
			$type: 'string',
			$required: true,
			$enum: ['1', '2', '3', '4']
		}

		test('when get a true value', () => {
			const data = '1'
			validate(schema, data, 'data')
		})

		test('when get a false value', () => {
			const data = '0'
			validateErrorTool(schema, data)
		})
	})

	describe('validateString $pattern', () => {
		const schema = {
			$type: 'string',
			$required: true,
			$pattern: '^[A-Za-z\s]+$'
		}

		test('when get a true value', () => {
			const data = 'helloworld'
			validate(schema, data, 'data')
		})

		test('when get a false value', () => {
			const data = 'hello world11'
			validateErrorTool(schema, data)
		})
	})
})

describe('validateNumber', () => {
	const schema = {
		$type: 'number',
		$required: true,
		$max: 99
	}

	test('validateNumber $max', () => {
		const data = 98
		validate(schema, data, 'data')
	})

	test('validateNumber $max ValidateError', () => {
		const data = 1000.60
		validateErrorTool(schema, data)
	})

	const schema1 = {
		$type: 'number',
		$required: true,
		$min: 2000
	}
	test('validateNumber $min', () => {
		const data = 10000
		validate(schema1, data, 'data')
	})

	test('validateNumber $min ValidateError', () => {
		const data = 99
		validateErrorTool(schema1, data)
	})
})

describe('validate random type', () => {
	const booleanArr = [true, false];
	const numberArr = [1, 2, 3, 4];
	const nullArr = [null];
	const objectArr = [{}];
	const stringArr = ['1', '2', '3', '4'];
	const undefinedArr = [undefined];
	const arrayArr = [booleanArr, nullArr, numberArr, objectArr, stringArr, undefinedArr];

	describe('validate type boolean', () => {
		const schema = {
			$type: 'boolean',
			$required: true
		}

		test('when get a boolean', () => {
			const data = false
			validate(schema, data, 'data')
		})

		const exceptionArr = [arrayArr[0],
		// booleanArr[0],
		nullArr[0], numberArr[0], objectArr[0], stringArr[0], undefinedArr[0]];

		exceptionArr.forEach((ele) => {
			test(`when get a ${getTypeOf(ele)}:${ele}`, () => {
				const data = ele
				validateErrorTool(schema, data)
			})
		})
	})

	describe('validate type string', () => {
		const schema = {
			$type: 'string',
			$required: true
		}

		test('when get a string', () => {
			const data = 'loki'
			validate(schema, data, 'data')
		})

		const exceptionArr = [arrayArr[0], booleanArr[0], nullArr[0], numberArr[0], objectArr[0],
		// stringArr[0],
		undefinedArr[0]];

		exceptionArr.forEach((ele) => {
			test(`when get a ${getTypeOf(ele)}`, () => {
				const data = ele
				validateErrorTool(schema, data)
			})
		})
	})

	describe('validate type object', () => {
		const schema = {
			$type: 'object',
			$required: true,
			hello: {
				$type: 'string',
				$required: true
			},
			world: {
				$type: 'number',
				$required: true
			},
			flag: {
				$type: 'boolean',
				$required: true
			}
		}

		test('when get a object', () => {
			const data = {
				hello: '124',
				world: 122,
				flag: true
			}
			validate(schema, data, 'data')
		})

		const exceptionArr = [arrayArr[0], booleanArr[0], nullArr[0], numberArr[0],
		// objectArr[0],
		stringArr[0], undefinedArr[0]];

		exceptionArr.forEach((ele) => {
			test(`when get a ${getTypeOf(ele)}`, () => {
				const data = ele
				validateErrorTool(schema, data)
			})
		})

		test('validate type object ValidateError', () => {
			const data = {
				hello: 124,
				world: 122,
				flag: true
			}
			validateErrorTool(schema, data)
		})
	})

	describe('validate type array', () => {
		const schema = {
			$type: 'array',
			$required: true,
			$items: {
				$type: 'string'
			}
		}

		test('when get a true value', () => {
			const data = ['2', '1', '3']
			validate(schema, data)
		})

		test('validate type array ValidateError', () => {
			const data = [2]
			validateErrorTool(schema, data)
		})
	})
})
