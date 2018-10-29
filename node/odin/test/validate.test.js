import Sif from '../src/validate'

import { getTypeOf } from '../src/util';

/**
 * 校验custom Eorrr name 是否正确
 * jest 有 expect(fn).toThrow(customError), 但是这个需要error messge一致。
 * 故自己try catch error
 * @param {function} fn
 * @param {object} schema
 * @param {*} data
 * @param {string}
 */
function validateErrorTool(fn, schema, data, key = 'data') {
	try {
		fn.call(Sif, schema, data, key)
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
			$enum: ['1', '2', '3', '4']
		}

		test('when get a true value', () => {
			const data = '1'
			Sif.validate(schema, data, 'data')
		})

		test('when get a false value', () => {
			const data = '0'
			validateErrorTool(Sif.validate, schema, data)
		})
	})

	describe('validateString $pattern', () => {
		const schema = {
			$type: 'string',
			$pattern: '^[A-Za-z\s]+$'
		}

		test('when get a true value', () => {
			const data = 'helloworld'
			Sif.validate(schema, data, 'data')
		})

		test('when get a false value', () => {
			const data = 'hello world11'
			validateErrorTool(Sif.validate, schema, data)
		})
	})
})

describe('validateNumber', () => {
	test('validateNumber $max', () => {
		const schema = {
			$type: 'number',
			$max: 99
		}
		const data = 98
		Sif.validate(schema, data, 'data')
	})

	test('validateNumber $max ValidateError', () => {
		const schema = {
			$type: 'number',
			$max: 1000.30
		}
		const data = 1000.60
		validateErrorTool(Sif.validate, schema, data)
	})


	test('validateNumber $min', () => {
		const schema = {
			$type: 'number',
			$min: 2000
		}
		const data = 10000
		Sif.validate(schema, data, 'data')
	})

	test('validateNumber $min ValidateError', () => {
		const schema = {
			$type: 'number',
			$min: 1000
		}
		const data = 99
		validateErrorTool(Sif.validate, schema, data)
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
			Sif.validate(schema, data, 'data')
		})

		const exceptionArr = [arrayArr[0],
		// booleanArr[0],
		nullArr[0], numberArr[0], objectArr[0], stringArr[0], undefinedArr[0]];

		exceptionArr.forEach((ele) => {
			test(`when get a ${getTypeOf(ele)}:${ele}`, () => {
				const data = ele
				validateErrorTool(Sif.validate, schema, data)
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
			Sif.validate(schema, data, 'data')
		})

		const exceptionArr = [arrayArr[0], booleanArr[0], nullArr[0], numberArr[0], objectArr[0],
		// stringArr[0],
		undefinedArr[0]];

		exceptionArr.forEach((ele) => {
			test(`when get a ${getTypeOf(ele)}`, () => {
				const data = ele
				validateErrorTool(Sif.validate, schema, data)
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
			Sif.validate(schema, data, 'data')
		})

		const exceptionArr = [arrayArr[0], booleanArr[0], nullArr[0], numberArr[0],
		// objectArr[0],
		stringArr[0], undefinedArr[0]];

		exceptionArr.forEach((ele) => {
			test(`when get a ${getTypeOf(ele)}`, () => {
				const data = ele
				validateErrorTool(Sif.validate, schema, data)
			})
		})

		test('validate type object ValidateError', () => {
			const data = {
				hello: 124,
				world: 122,
				flag: true
			}
			validateErrorTool(Sif.validate, schema, data)
		})
	})

	describe('validate type array', () => {
		const schema = {
			$type: 'array',
			$required: true,
			items: {
				$type: 'string',
				$required: true
			}
		}

		test('when get a true value', () => {
			const data = ['2', '1', '3']
			Sif.validate(schema, data, 'data')
		})

		test('validate type array  ValidateError', () => {
			const schema = {
				$type: 'array',
				$required: true,
				items: {
					$type: 'string',
					$required: true
				}
			}
			const data = [2, '1', '3']
			validateErrorTool(Sif.validate, schema, data)
		})
	})
})

describe('format Schema', () => {
	test('format Schema string', () => {
		const params = {
			hello: 'string'
		}

		const data = Sif.formatSchema(params)
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

		const data = Sif.formatSchema(params)
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

		const data = Sif.formatSchema(params)
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
