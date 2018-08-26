const func = require('../lib/schema')

// TODO需修改调用

test('data type string', () => {
	let data = {
		type: 'string'
	}
	expect(func.toSchema(data)).toEqual({type: 'string'});
});

test('data type integer', () => {
	let data = {
		type: 'integer'
	}
	expect(func.toSchema(data)).toEqual({type: 'integer'});
});

test('data object', () => {
	let data = {
		properties: {
			id: {
				type: 'string'
			},
			name: {
				type: 'string'
			}
		}
	}
	expect(func.toSchema(data)).toEqual({id: {type: 'string'}, name: {type: 'string'}});
});

test('data more object', () => {
	let data = {
		properties: {
			id: {
				type: 'string'
			},
			name: {
				properties: {
					firstName: {
						type: 'string'
					},
					lastName: {
						type: 'string'
					}
				}
			},
			arr: {
				type: 'array',
				items: {
					properties: {
						name: {
							type: 'string'
						},
						flag: {
							type: 'boolean'
						}
					}
				}
			}
		}
	}
	expect(func.dealSchema(data)).toEqual(
		{ type: 'object',
		id: { type: 'string' },
		name:{ type: 'object', firstName: { type: 'string' },lastName: { type: 'string' } },
		arr:{ type: 'array',
		  	items:{ type: 'object',
        	name: { type: 'string' },
			flag: { type: 'boolean' } } } }
		);
})
