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