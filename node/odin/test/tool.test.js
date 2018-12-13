import Util from '../src/util/tool.js'

test('getTypeof', () => {
	const data = {}
	expect(Util.getTypeOf(data)).toBe('object')
})

test('startsWith', () => {
	const data = '$hello'
	expect(Util.startsWith(data, '$')).toBe(true)
	expect(Util.startsWith(data, 'h')).toBe(false)
})

test('isEmpty {}', () => {
	const data = {}
	expect(Util.isEmpty(data)).toBe(true)
})

test('isEmpty null', () => {
	const data = null
	expect(Util.isEmpty(data)).toBe(true)
})

test('isEmpty []', () => {
	const data = []
	expect(Util.isEmpty(data)).toBe(true)
})

test('isEmpty undefined', () => {
	const data = undefined
	expect(Util.isEmpty(data)).toBe(true)
})

test('isEmpty object', () => {
	const data = { hello: 'dd' }
	expect(Util.isEmpty(data)).toBe(false)
})

test('isEmpty array', () => {
	const data = [1,3]
	expect(Util.isEmpty(data)).toBe(false)
})
// TODO getUrlInfo getUrlPath
