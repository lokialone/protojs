/**
 * 验证传入的schema 与 data,
 * 上传error to sentry
 * @param {*} schema
 * @param {*} data
 * @returns Boolean
 */

import ValidateError from './error'
import rules from './rules'
import Util from '../util/tool'

function isArrayWithItems(schema) {
	return schema.$type === 'array' && schema.hasOwnProperty('$items')
}

function validate (schema, data, key) {
	if (!schema || Util.isEmpty(schema)) return

	if (!schema.$required) return

	if (data === undefined || data === null) {
		throw new ValidateError(key + ' undefined or null')
	}

	if (schema.$type === Util.getTypeOf(data)) {
		const basicType = ['string', 'number']

		if (basicType.includes(schema.$type)) {
			rules(schema.$type, schema, data, key )
		}
		// $type = array
		if (isArrayWithItems) validate(schema.$items, data[0], key)

		// $type = object
		if (schema.$type === 'object') {
			Object.keys(schema).forEach((i) => {
				if (!Util.startsWith(i, '$')) {
					validate(schema[i], data[i], i)
				}
			})
		}
	} else {
		throw new ValidateError(key + ' type error; should be ' + schema.$type + ' actual ' + Util.getTypeOf(data))
	}
}

export default validate



