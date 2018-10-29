<template>
    <div class='time-count-down' v-if="showTimeFlag">
       <span class="time-count-down__label">剩余时间</span> {{timeShow}}
    </div>
</template>
<script>
export default {
    data() {
        return {
            timeShow: '',
            timeCount: 60,
            now: 1000,
            timer: '',
            showTimeFlag: true
        };
    },
    props: {
        endTime: {
            default() {
                return new Date();
            }
        },
        spaceTime: {
            type: Number,
            default() {
                return 30 * 60;
            }
        },
        orderStatus: {
            required: true
        }
    },
    computed: {
    },
    created() {
    },
    mounted() {
        this.timeCount = this.endTime - Date.now();
        if (this.timeCount > 0) {
            this.setCountDown();
        } else {
            if (this.orderStatus === 150) {
                this.showTimeFlag = false;
            }
            this.timeShow = '00:00';
        }
    },
    beforeDestroy() {
        clearInterval(this.timer);
    },
    methods: {
        countDown(timestamp) {
            let tmpTimeCount = this.timeCount / 1000;
            if (this.timeCount <= 0) {
                this.showTimeFlag = false;
                this.timeShow = '00:00';
                return;
            }
            if (timestamp >= this.now) {
                this.timeCount -= 1000;
                this.now += 1000;
                let min = parseInt(tmpTimeCount / 60);
                let sec = parseInt(tmpTimeCount) - (min * 60);
                min = min >= 10 ? min : `0${min}`;
                sec = sec >= 10 ? sec : `0${sec}`;
                this.timeShow = `${min}:${sec}`;
            }
            requestAnimationFrame(this.countDown);
        },
        setCountDown() {
            this.timer = setInterval(() => {
                if (this.timeCount <= 0) {
                    this.timeShow = '00:00';
                    this.timer = null;
                    if (this.orderStatus === 150) {
                        this.showTimeFlag = false;
                    }
                    this.$emit('time-out');
                    return;
                }
                let tmpTimeCount = this.timeCount / 1000;
                let hour = parseInt(tmpTimeCount / 60 / 60);
                let min = parseInt((tmpTimeCount / 60) - (hour * 60));
                let sec = parseInt(tmpTimeCount) - (min * 60) - (hour * 60 * 60);
                hour = hour >= 10 ? hour : `0${hour}`;
                min = min >= 10 ? min : `0${min}`;
                sec = sec >= 10 ? sec : `0${sec}`;
                if (hour === '00') {
                    this.timeShow = `${min}:${sec}`;
                } else {
                    this.timeShow = `${hour}:${min}:${sec}`;
                }
                this.timeCount -= 1000;
            }, 1000);
        }
    },
    components: {}
};
</script>
<style scoped lang='less'>
.time-count-down {
    color: #1a1a1a;
    font-size: 24px;
    line-height: 24px;
    display: flex;
    text-align: center;
    justify-content: center;
    margin-top: 24px;
    .ime-count-down__label{
        color: #999;
        font-size: 24px;
        display: inline-block;
    }
}
</style>

