import Vue from 'vue';
import toast from './main.vue';


let ToastConstrouct = Vue.extend(toast);
class Toast {
    constructor() {
        this.instance = new ToastConstrouct();
        this.instance.vm = this.instance.$mount();
        document.body.appendChild(this.instance.vm.$el);
    }
    show(options) {
        this.instance.title = options.title;
        this.instance.info = options.info;
        this.instance.time = options.time || 1500;
        this.instance.show();
    }
    openLoading(text) {
        this.instance.loadingText = text;
        this.instance.openLoading();
    }

    closeLoading() {
        this.instance.closeLoading();
    }

}

export default new Toast();
