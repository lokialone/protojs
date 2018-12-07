class DateSlider {
    constructor(obj, callback) {
        this.obj = obj;
        this.startPos = 0;
        this.offset = 0;
        this.index = 0;
        this.callback = callback;
        this.deg = 25; //初始化偏转的角度
        this.length = this.obj.children.length;
        this.distance = this.obj.children[0].offsetHeight;
        //为了移除事件绑定0.0
        this.touchstart = '';
        this.touchend = '';
        this.touchmove = '';
    }

    static setTranslate3d(obj, dis) {
        obj.style.webkitTransform = `translate3d(0,${dis}px,0)`;
    }
    static setRotateX(obj, index, deg = 25) {
        //设置每个Li的偏转角度
        Array.from(obj).forEach((ele, i) => {
            obj[i].style.webkitTransform = `rotateX(${(i + index) * deg}deg)`;
        });
    }

    init() {
        DateSlider.setTranslate3d(this.obj, this.index * this.distance);
        //初始化3D偏转角度
        DateSlider.setRotateX(this.obj.children, this.index);
        this.bind(this.obj);

    }
    destory() {
        this.distance = '';
        this.obj.removeEventListener('touchstart', this.touchstart, false);
        this.obj.removeEventListener('touchmove', this.touchmove, false);
        this.obj.removeEventListener('touchend', this.touchend, false);
    }

    bind(selector) {
        let iStartPageY = 0;
        let step = 1; //弹性系数
        let prevPoint = 0;
        let speed = 0; //手指离开时候的瞬时速度,速度越大,最后停留的越远
        let timer = null;
        let length = this.length - 1;
        const setTranslate = (e) => {
            let dis = this.getYoffset(e);
            selector.style.webkitTransform = `translate3d(0, ${dis}px, 0)`;
        };

        const touchstart = (e) => {
            e.preventDefault();
            e.stopPropagation();
            clearInterval(timer);
            iStartPageY = e.changedTouches[0].pageY;
            prevPoint = iStartPageY;
        };

        const touchmove = (e) => {
            e.preventDefault();
            e.stopPropagation();
            let iDisY = (e.changedTouches[0].pageY - iStartPageY);
            speed = (e.changedTouches[0].pageY - prevPoint);
            prevPoint = e.changedTouches[0].pageY;
            //已滑动在头部或尾部,但是用户还想往上或下滑,这是给一种越往上或下滑越难拖动的体验
            if ((this.index === 0 && iDisY > 0) || (this.index === -length && iDisY < 0)) {
                step = 1 - (Math.abs(iDisY) / selector.clientWidth); //根据超出长度计算系数大小，超出的越到 系数越小
                step = Math.max(step, 0); //系数最小值为0
                iDisY = parseInt(iDisY * step);
            }
            DateSlider.setTranslate3d(selector, (this.index * this.distance) + iDisY);
            DateSlider.setRotateX(this.obj.children, this.index + (iDisY / this.distance));
        };

        const touchend = (e) => {
            e.preventDefault();
            e.stopPropagation();
            let iDisX = e.changedTouches[0].pageY - iStartPageY;
            //初速度很小的逻辑处理
            let flag = false;
            if (Math.abs(speed) <= 1) {
                flag = true;
            }
            timer = setInterval(() => {
                if (Math.abs(speed) <= 1) {
                    clearInterval(timer);
                    if (flag) {
                        this.index += Math.round(iDisX / this.distance);
                    }
                    this.index = this.index > 0 ? Math.min(this.index, 0) : Math.max(this.index, -length);
                    // this.index = this.index > 0 ? 0 : (this.index < -length ? -length : this.index);
                    selector.style.webkitTransitionDuration = '400ms';
                    selector.addEventListener('webkitTransitionEnd', () => {
                        //touchend事件触发后会有一个动画，触发完成后立即清除transition
                        selector.style.webkitTransitionDuration = '0ms';
                    });
                    Array.from(selector.children).forEach((ele) => {
                        ele.style.webkitTransitionDuration = '200ms';
                        ele.addEventListener('webkitTransitionEnd', () => {
                            ele.style.webkitTransitionDuration = '0ms';
                        });
                    });
                    DateSlider.setTranslate3d(selector, this.index * this.distance);
                    DateSlider.setRotateX(this.obj.children, this.index);
                    this.callback && this.callback(Math.abs(this.index));
                } else {
                    speed *= 0.2;
                    iDisX += speed;
                    this.index += Math.round(iDisX / this.distance);
                }
            }, 13);
        };
        this.touchstart = touchstart;
        this.touchend = touchend;
        this.touchmove = touchmove;
        selector.addEventListener('touchstart', touchstart, false);
        selector.addEventListener('touchmove', touchmove, false);
        selector.addEventListener('touchend', touchend, false);
    }
}

export default DateSlider;
