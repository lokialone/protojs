# odin
前端通用页面监控

## 安装
```
npm i @souche/odin -S
```

## 接入Sif业务监控
### 检验api发送的请求，参数和返回的数据
#### 1.首先需要生产本地的api json schema
```
odin init -a api-doc1,api-doc2(项目的api地址,支持多个)
```
api-doc为swagger的doc地址, 例如 http://topgear-test1.dasouche.net/api-docs。
odin init 第一次执行时会需要测试环境的账号信息(手机号和密码, 如果手机号密码输错了，可以使用 odin rm-info 来清除)。
执行完后会在根目录生成api-json-schema.json文件,里面会有该文档下所有的api schema.

#### 2.修改main.js

```
//main.js
import Sif from '@souche/odin/dist/validate.js';
import schema from './api-json-schema.json';
import Http from '@souche-f2e/http-request'; //(如果未使用http-request,则init不需要传入Http)

Sif.init({
	schema,
	Http,
	env: 'prod', // dev、prepub、 prod
});
```

##### env
env为dev、prepub仅会console.error报错，不会将数据上报到sentry后台。如果未接入sentry,亲点击 https://sentry.souche-inc.com/sentry/

##### 兼容使用axios
> 一般比较有品位的都是用axios的，如果你既不用axios,又不用http-request。那就再见了👋。

```
//例如使用
import axios from 'axios'
import Sif from '@souche/odin/dist/validate.js';

const responeceSuccess = function (res) {
	Sif.validateAxios(res);
	...
}

axios.interceptors.response.use(responeceSuccess);
```

#### 3.api-json-schema 去除多余内容
```
odin rm-api
```
该命令或查询src/api/下所有的js文件里出现过的 'xxx.json' 或者 'xxx.jsonp', 然后将api-json-schema里多余的api定义去除。注意使用的时机，最好在准备上预发或者上线前。如果误删也可以重新执行
```
odin init
odin rm-api
```


#### 4.后续
api的校验规则一开始使用后端swagger上的数据规则。之后可以将本地规则上传到监控后台，在监控后台编辑规则。线上监控是会使用编辑过的规则。


### 检验路由跳转参数(for vue project)
#### 1.route的数据校验需要我们在route文件里写入检验规则。
meta->validate里写入需要检验的字段，key为字段，value为类型。
例如 {id: 'string'}, 表示需要校验id,并且id类型为string。如果不需要检验的字段就不需要写入。
{id: [1,3,4,5]}, 表示id的值只能是数组里的其中一位。route跳转参数推荐为string。如下:

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

#### 2.修改main.js
```
//main.js
import Sif from '@souche/odin/dist/validate.js';
import router from '../router'; //router路径

Sif.init({
	router,
	env: 'prod', // dev/development prepub prod/production
});

```

## Thor性能监控


### ajax 耗时监控
performance.getRe



## 实现

## Bragi 空闲时任务执行队列




## 尝试过的方案

### 监控策略
ajax beforeEach, afterEach 分别打点计时

```
	// 得到的数据时发起请求到，接口返回数据的时间，
	// 会略大于chrome 接口Timing面盘上的时间
	/**
	* ajax 耗时记录
	*/
	Thor.ajaxPref = function () {
	Http.beforeEach((res, next) => {
		let url = res.params.url
		let data = res.params.data
		// 为url拼上参数,
		// beforeEach拿到的url 没有query
		// afterEach拿到的url会有query参数
		if (data) {
			let params = []
			Object.keys(data).forEach((key) => {
				let value = data[key]
				params.push(key+ '='+ value)
			})
			url = url + '?' +params.join('&')
		}
		this.ajaxInfo[url] = Date.now()
		next()
	})

	Http.afterEach((res) => {
		console.log('ajaxtime:', Date.now() - this.ajaxInfo[res.params.url], 'ms')
	})
	}
```

