<template>
    <div class='lk-toast-container' v-if="isShow || isLoading">
        <div class="lk-toast" v-if="isShow">
            <div class="lk-toast__content">
                <div style="display: flex; align-items:center" v-if="qrUrl">
                    <img :src="qrUrl" alt="" class="qr-image">
                    <div class="content">
                        <div>{{title}}</div>
                        <div class="info">{{info}}</div>
                    </div>
                </div>
                <div v-else>
                    <img :src="intIcon" class="icon" v-if="intIcon">
                    <div class="content">
                        <div>{{title}}</div>
                        <div class="info" sytle="text-align:center;">{{info}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lk-loading" v-if="isLoading">
            <i class= "loading-icon"></i>
            <span class="loading-text">{{loadingText}}</span>
        </div>
    </div>
</template>
<script>
import QRCode from 'qrcode';

export default {
    data() {
        return {
            isShow: false,
            isLoading: false,
            timer: '',
            intIcon: '',
            qrUrl: ''
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
        icon: {

        },
        loadingText: {
            default: '加载中'
        },
        type: {

        },
        traceId: {
            default: ''
        }
    },
    computed: {},
    created() {
    },
    mounted() {},
    methods: {
        show () {
            if (this.traceId) {
                QRCode.toDataURL(this.traceId, {
                    errorCorrectionLevel: 'L',
                    margin: 1
                })
                    .then((url) => {
                        this.qrUrl = url;
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            }
            this.intIcon = this.icon;
            if (this.type === 'success') this.intIcon = '//img.souche.com/f2e/13b498845adee41a35fdb178890d071d.png';
            if (this.type === 'fail') this.intIcon = '//img.souche.com/f2e/1c9a5fd0b5d6053311f6ca659e0c0a7d.png';
            this.isShow = true;
            if (this.timer !== '') {
                return;
            }
            this.timer = window.setTimeout(() => {
                window.clearTimeout(this.timer);
                this.isShow = false;
                this.timer = '';
                this.qrUrl = '';
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
    font-size: 0;
    .lk-toast{
        display: inline-block;
        position: fixed;
        color: #fff;
        text-align: center;
        // line-height: 1.4;
        left: 50%;
        top: 400px;
        font-size: 32px;
        width: 500px;
        transform: translate(-50%, 0);
        .lk-toast__content{
            display: flex;
            align-items: center;
            display: inline-block;
            padding: 32px 32px;
            box-sizing: border-box;
            background: rgba(0,0,0,.8);
            border-radius: 4*2px;
        }
        .qr-image{
            width: 68px;
            height: 68px;
            margin-right: 16px;
        }
        .icon{
            width: 72px;
            height: 72px;
            padding: 24px 60px 32px;
        } d
        .info{
            max-width: 360px;
            // white-space:nowrap;
            word-wrap:break-word;
            text-align: left;
        }
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
        margin: 30*2px auto 10px;
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

