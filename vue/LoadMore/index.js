import Vue from 'vue';
import loadmore from './main.vue';

let LoadMoreConstructor = Vue.extend(loadmore);

class LoadMore {
    constructor() {
        this.instance = new LoadMoreConstructor();
        this.instance.vm = this.instance.$mount();
        document.body.appendChild(this.instance.vm.$el);
    }
    // 显示加载中
    show() {
        this.instance.show();
    }
    // 隐藏
    hide() {
        this.instance.close();
    }
    // 显示没有更多内容
    end() {
        this.instance.end();
    }
    // 获取是否在页面底部
    onPageBottom() {
        return this.instance.onPageBottom;
    }
}

export default new LoadMore();
