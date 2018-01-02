import Vue from 'vue';
import alert from './main';

let AlertConstructor = Vue.extend(alert);
class Alert {
    constructor() {
        this.instance = new AlertConstructor();
        this.instance.vm = this.instance.$mount();
        document.body.appendChild(this.instance.vm.$el);
    }
    show (options = {}) {
        this.instance.msg = options.msg;
        this.instance.callback = options.callback;
        this.instance.show();
    }
    close () {
        this.instance.close();
    }
}

export default new Alert();
