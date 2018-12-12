# odin
前端通用页面监控

## 安装
```
npm i @souche/odin -S
```


## robben新建的vue项目

### 同时接入业务和性能监控

接入api接口校验，需要先去 moniter-server 填写 swagger api 地址，生成schema信息

1. 在main.js里初始化odin

```
//main.js
import Odin from '@souche/odin';
import Package from '../package.json';
import router from './router';
import Http from '@souche-f2e/http-request'; //(如果未使用http-request,则init不需要传入Http)

Odin.init({
	name: Package.name,
	httpRequest, //for http-request
	env: Process.env.VUE_APP_ENV,
	vueRouter: router
});
```
2. 修改sentry的初始化。
去掉之前的vueSentry,保留之前的dsn的value写到自己的raven配置中。
注意一下vueSentry的初始化所在的文件可能不同。
```
//src/utils/helpers/init.js
// 修改sentryInit

//old
import VueSentry from '@souche-vue/vue-sentry'
...

const sentryInit = () => {
    let packageJson = require('../../../package.json');
    Vue.use(VueSentry, {
    dsn:'https://45142f58499544a8af9a5b4856fff8dc@sentry.souche.com/564',
    env: process.env.VUE_APP_ENV,
    version: packageJson.version
    });
};

//new
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';
...
const sentryInit = () => {
    let package = require('../../../package.json');
    Raven
    .config('XXXX', { //old里的dsn
        allowSecretKey: true,
        environment: 'production',
        release: Package.version
    })
    .addPlugin(RavenVue, Vue)
    .setUserContext({
        User: 'XXXX' //需要传入
    })
    .install();
};
```

3. route 跳转校验需要自己写router-schema. 使用了vue-router或者souche-router,采用同样的写法。都是在meta->validate里写验证规则

例如 {id: 'string'}, 表示需要校验id,并且id类型为string。如果不需要检验的字段就不需要写入。
{id: [1,3,4,5]}, 表示id的值只能是数组里的其中一位。
> route跳转参数推荐为string。

示例：

```
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    routes: [{
        path: '/',
		//规则开始
        meta: {
            validate: {
                id: ['1', '3', '4']
            }
        },
		//规则结束
        component: () => import('../views/index.vue')
    }, {
        path: '/name/:id',
		//规则开始
        meta: {
            validate: {
                id: 'string',
                data: 'string'
            }
        },
		//规则结束
        component: () => import('../views/name.vue')
    }
    ]
});

export default router;
```


for souche-router
```

'/': {
	path: 'views/index',
	name: 'index',
	//规则开始
	meta: {
		validate: {
			id: ['1', '3', '4']
		}
	}
	//规则结束
}

```


### 只接入业务监控
作用是 1.检验api发送的请求，参数和返回的数据， 2. 校验路由跳转传参是否正确

#### 使用方式
修改main.js
```
//main.js
import Sif from '@souche/odin/dist/validate.js';
import Package from '../package.json';
import httpRequest from '@souche-f2e/http-request';

Sif.init({
	name: Package.name,
	httpRequest, //for http-request,
	env:Process.env.VUE_APP_ENV,
});
```

route schema编写，sentry init 上面已有，不做复述

### 直接入性能监控
作用是api耗时，router跳转耗时过久报错

修改main.js
```
//main.js

import Thor from '@souche/odin/dist/performance.js';
import Package from '../package.json';
import httpRequest from '@souche-f2e/http-request';

Thor.init({
	name: Package.name,
	httpRequest, //for http-request,
	env:Process.env.VUE_APP_ENV
});
```
entry init 上面已有，不做复述

## 老项目兼容
主要是针对未使用http-request的兼容

### 兼容使用axios
> 一般比较有品位的都是用axios的，如果你既不用axios,又不用http-request。那就再见了👋。

修改main.js
```
//main.js
import Odin from '@souche/odin';
import Package from '../package.json';
import router from './router';

Odin.init({
	name: Package.name,
	env: Process.env.VUE_APP_ENV,
	vueRouter: router
});
```

axios 配置
```
//例如使用
import axios from 'axios'
import { axiosHelper } from '@souche/odin';
import Sif from '@souche/odin/dist/validate.js';
import Thor from '@souche/odin/dist/performance.js';

const responeceSuccess = function (res) {
	axiosHelper(res);//同时使用业务和性能监控
	Sif.validateAxios(response);/只接入时业务监控
	Thor.axiosPerf(res);//只接入性能监控
	...
}
axios.interceptors.response.use(responeceSuccess);

```
