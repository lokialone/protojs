/**
 * @Author: lokalone
 * @Date:   2017-04-19T16:24:22+08:00
 * @Last modified by:   lokalone
 * @Last modified time: 2017-04-19T17:44:06+08:00
 */

import './style.less';

let timer = '';
let toastContainer = '';
let loading = '';

function createToast(data) {
    let title = data.title ? data.title : '';
    let info = data.info ? data.info : '';
    let icon = data.icon ? data.icon : '';
    toastContainer = document.createElement('div');
    toastContainer.className = 'lk-toast-container';
    let toast = document.createElement('div');
    toast.className = 'lk-toast';
    if (title && info && icon) {
        //todo;
    } else if (title && info) {
        toast.innerHTML = `
        <div>${title}</div>
        <div>${info}</div>
        `;
    } else {
        toast.innerHTML = `
        <div>${info}</div>
        `;
    }
    toastContainer.appendChild(toast);
    document.body.appendChild(toastContainer);

}

function clearToast() {
    document.body.removeChild(toastContainer);
}

export function Toast(data) {
    if (timer !== '') {
        return;
    }
    createToast(data);
    timer = window.setTimeout(() => {
        clearToast();
        window.clearTimeout(timer);
        timer = '';
    }, 1500);
}

function createLoading(text) {
    loading = document.createElement('div');
    loading.className = 'lk-loading';
    if (text) {
        loading.innerHTML = `
             <i class= "loading-icon"></i>
             <span class="loading-text">${text}</span>
        `;
    } else {
        loading.innerHTML = `
            <i class= "loading-icon"></i>
        `;
    }
    document.body.appendChild(loading);

}

export function openLoading(text) {
    if (loading) return;
    createLoading(text);
}

export function closeLoading() {
    if (!loading) return;
    document.body.removeChild(loading);
    loading = '';
}

export default {
    Toast,
    openLoading,
    closeLoading
};
