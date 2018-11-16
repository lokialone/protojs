



export function formatToSchema (params) {
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
		} else if (value === 'string') {
			res[key] = {
				$required: true,
				$type: 'string'
			}
		} else {
			res[key] = {
				$required: true,
				$type: value
			}
			console.warn('路由跳转传值推荐使用string类型')
		}
	})
	return res
}


