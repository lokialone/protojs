import Util from '../util/tool'

/**
 * 将例如
 * {
 * 		a: [1,3,4],
 * 		b: 'string',
 * 		e: {
 * 			$type: 'number',
 * 			$required: false
 * 		}
 * }
 * 转换成
 * {
 * 	 a: {
 * 		$enum: [1,3,4],
 * 		$type: 'number',
 * 		$required: true
 * 	},
 * 	b: {
 * 		$type: 'string',
 * 		$required: true
 *  },
 *  e: {
 * 		$type: 'number',
 * 		$required: false
 * 	}
 *
 * }
 * @param {*} params
 */
export function formatSchema (params) {
	if (!params || Util.isEmpty(params)) return {}

	let res = {$type: 'object', $required: true}

	Object.keys(params).forEach((key) => {
		let value = params[key]
		if (Util.isArray(value)) {
			let required = value.length ? true : false
			res[key] = {
				$enum: value,
				$required: required,
				$type: Util.getTypeOf(value[0])
			}
		} else if (typeof value === 'string') {
			res[key] = {
				$required: true,
				$type: value.toLowerCase()
			}
			if (value === 'object') console.warn('路由跳转传值推荐使用string类型')
		} else {
			res[key] = value
		}
	})
	return res
}


