
import ValidateError from './error'

const numberRules = {
	$max: function(schema, data, key) {
		if (parseFloat(data) > parseFloat(schema.$max)) {
			throw new ValidateError(key +' : ' + data + ' greater than maxinum ' + schema.$max)
		}
	},
	$min: function(schema, data, key) {
		if (parseFloat(data) < parseFloat(schema.$min)) {
			throw new ValidateError(key +' : ' + data + ' less than mininum ' + schema.$min)
		}
	},
	$enum: function(schema, data, key) {
		if (schema.$enum.indexOf(data) === -1 && schema.$enum.length) {
			throw new ValidateError(key +' : ' + data + ' not in enum ' + schema.$enum)
		}
	}
}

const stringRules = {
	$enum: function(schema, data, key) {
		if (schema.$enum.length && schema.$enum.indexOf(data) === -1) {
			throw new ValidateError(key+' : ' + data + ' not in enum ' + schema.$enum)
		}
	},
	$pattern: function (schema, data, key) {
		const regex = new RegExp(schema.$pattern);
		if (!regex.test(data)) throw new ValidateError(key +' : ' + data + ' not match ' + schema.$pattern)
	}
}


const allRules = {
	'number': numberRules,
	'string': stringRules
}

function validteRules (type, schema, data, key) {
	const rules = allRules[type];
	Object.keys(rules).forEach((item) => {
		if (schema.hasOwnProperty(item)) {
			rules[item](schema, data, key)
		}
	})
}

export default (type, schema, data, key) => {
	return validteRules(type, schema, data, key)
}
