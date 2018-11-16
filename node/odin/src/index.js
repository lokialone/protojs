import Sif from './validate/validate'
import Thor from './perfomance/perfomance'

const Odin = {}

Odin.init = function (opts) {
	try {
		Sif.init(opts)
		// Thor.init(opts)
	} catch (error) {
		console.error(error)
	}
}

export default Odin
