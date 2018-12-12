import Sif from './validate/index.js'
import Thor from './perfomance/perfomance'

const Odin = {}

Odin.init = function (opts) {
	try {
		Sif.init(opts)
		Thor.init(opts)
	} catch (error) {
		console.error(error)
	}
}
/**
 *
 * @export
 * @param {*} res axios 返回数据
 */
export function axiosHelper(res) {
	Thor.axiosPerf(res)
	Sif.validateAxios(res)
}

export default Odin
