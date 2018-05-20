import axios, { CancelToken } from 'axios';
import Toast from '@/components/common/toast/main.js';

// axios.defaults.baseURL = process.env.ORDER_API_HOST;
var instance = axios.create({
    baseURL: process.env.API_HOST
});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Do something with response data
    let data = response.data;
    if (data.success) return data.data;
    //服务器出错
    Toast.show({'info': data.msg || '出错了'});
    let error = new Error('服务器出错');
    return Promise.reject(error);
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export function post(url, data = {}) {
    return instance({
        method: 'post',
        url: url,
        params: Object.assign({}, data)
    });
}

export function get(url, data = {}) {
    return instance({
        method: 'get',
        url: url,
        params: Object.assign({}, data)
    });
}

export function imageUpload(file) {
    let data = new FormData();
    data.append('file', file);
    return axios({
        method: 'post',
        url: 'http://niu.souche.com/upload/aliyun',
        data: data
    });
}

export default {
    get,
    post
};
