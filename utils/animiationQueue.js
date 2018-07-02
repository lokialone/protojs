// how to use
// push每个函数里都包含着next()函数，保证每个函数顺序执行
// demo  weidian-dependencies-charts
class AnimationQueue {

    constructor() {
        this.funcs = [];
        this.index = 0;
    }

    push(fn) {
        if (typeof fn === 'function') {
            this.funcs.push(fn);
        }
    }

    next() {
        let fn = this.funcs[this.index];
        if (typeof fn === 'function') {
            this.index += 1;
            fn();
        }
    }
}

export default AnimationQueue;

