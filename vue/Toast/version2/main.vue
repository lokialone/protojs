<template>
    <div class='lk-toast-container' v-if="isShow || isLoading">
        <div class="lk-toast" v-if="isShow">
            <div>{{title}}</div>
            <div>{{info}}</div>
        </div>
        <div class="lk-loading" v-if="isLoading">
            <i class= "loading-icon"></i>
            <span class="loading-text">{{loadingText}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isShow: false,
            isLoading: false,
            timer: ''
        };
    },
    props: {
        title: {
            default: 'title'
        },
        info: {
            default: 'this is content'
        },
        time: {
            default: 3000
        },
        loadingText: {
            default: '加载中'
        }
    },
    computed: {},
    created() {
    },
    mounted() {},
    methods: {
        show () {
            this.isShow = true;
            if (this.timer !== '') {
                return;
            }
            this.timer = window.setTimeout(() => {
                window.clearTimeout(this.timer);
                this.isShow = false;
                this.timer = '';
            }, this.time);
        },
        openLoading() {
            this.isLoading = true;
        },
        closeLoading() {
            this.isLoading = false;
        }
    },
    components: {}
};
</script>
<style scoped lang='less'>
.lk-toast-container{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 99;
    .lk-toast{
        border-radius: 4*2px;
        display: inline-block;
        position: fixed;
        width: 166*2px;
        padding: 10*2px 0;
        background: rgba(0,0,0,.8);
        color: #fff;
        text-align: center;
        line-height: 1.3;
        left: 50%;
        top: 200*2px;
        font-size: 14*2px;
        transform: translate(-50%, 0);
    }
}
.lk-loading{
    position: absolute;
    width: 120*2px;
    height: 120*2px;
    // background:rgba(0, 0, 0,0.75);
    top: 50%;
    text-align: center;
    left: 50%;
    margin-top: -120px;
    color: white;
    border-radius: 4*2px;
    z-index:10;
    margin-left: -60*2px;
    .loading-icon{
        margin: 30*2px auto 0;
        display: block;
        width: 30*2px;
        height: 30*2px;
        background: url('//img.souche.com/f2e/0fa15e842c37b358219438db515930bb.png') no-repeat;
        background-size: contain;
        animation: keeprotate 1s linear infinite;
    }
    .loading-text{
        font-size: 14*2px;
        font-weight: 400;
    }
}
@keyframes keeprotate{
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}
</style>

