const axios = require('axios');

const baseUrl = 'http://topgear.prepub.souche.com/api-docs/';

axios.defaults.headers.get['Cookie'] = '_security_token=1JxnP_bCwFWRGbmI';

/**
 *
 * @param {*} baseUrl
 */
async function getAPiDocsInfo(baseUrl) {
  try {
      const res = await axios.get(baseUrl)
      // console.log(res);
      if (res.data) return res.data.apis
      // TODO
      // 登录souche
      // then reget docinfo

  } catch (error) {
      console.log(error)
  }
}

// TODO
// 登录souche
function login() {

}

function createSchema() {

}

async function init () {
	const docsInfo = await getAPiDocsInfo(baseUrl);
	// for get api-docs info concurrently
	const apiInfo= docsInfo.map(async item => {
		let data = await axios.get(baseUrl + item.path)
    	return data.data
  	});
	// get all apis and models
	const tmp = []
  	for (let info of apiInfo) {
    	tmp.push(await info)
	}
	console.log(tmp[1])
}

// init();
const basicType = [
	'string', 'boolean', 'integer','object'
]




