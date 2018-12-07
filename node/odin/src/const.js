export const REMOTE_SCHEMA_API = 'http://monitor-server-dev.dasouche-inc.net/api/schemas/project?projectName='

export const ERROR_TYPE = {
	API_DATA_ERROR: 'apiDataError',
	API_STATUS_ERROR: 'apiStatusError',
	API_PARAMS_ERROR: 'apiParamsError',
	ROUTE_RPARAMS_ERROR: 'routerParamsError',
	API_SLOW_ERROR: 'apiSlowError',
	PAGE_SLOW_ERROR: 'pageSlowError'
}
export const ENV = {
    DEV: 'development',
    PREPUB: 'prepub',
    PROD: 'production'
}

export default {
	REMOTE_SCHEMA_API,
	ENV,
	ERROR_TYPE
}
