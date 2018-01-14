import Vue from 'vue';
import loadmore from './main.vue';

let LoadMoreConstructor = Vue.extend(loadmore);

class LoadMore {
    constructor() {
        this.init();
    }
    // 显示加载中
    show() {
        if (!this.instance) return;
        this.instance.show();
    }
    // 隐藏
    hide() {
        if (!this.instance) return;
        this.instance.close();
    }

    // 重新生成loadmore
    init() {
        if (!this.instance) {
            this.instance = new LoadMoreConstructor();
            this.instance.vm = this.instance.$mount();
            this.callback = '';
            document.body.appendChild(this.instance.vm.$el);
        }
    }
    //不删除dom结构，
    // 推荐在router.beforeEach里统一销毁组件
    destroy() {
        if (!this.instance) return;
        this.instance.close();
        this.instance.$off('onPageBottom', this.callback);
        this.callback = '';
    }
    // 显示没有更多内容
    end() {
        if (!this.instance) return;
        this.instance.end();
    }
    // 监听onPageBottom 并执行传入的函数
    LoadData (callback) {
        this.callback = callback;
        this.instance.$on('onPageBottom', callback);
    }
}

export default new LoadMore();
