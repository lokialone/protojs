<template>
    <div class="confirm" v-if="isShow">
        <div class="title">
            {{ title }}
        </div>
        <div class="content">
            <div class="">
                {{ content }}
            </div>
            <div class="border">
            </div>
        </div>
        <div class="btn-wrap">
            <div class="btn cancel" @click="close()">
                {{ leftBtn }}
            </div>
            <div class="border-vertical">
            </div>
            <div class="btn" @click="confirm()">
                {{ rightBtn }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: false
        };
    },
    props: {
        title: {
            default: '提示'
        },
        content: {
            default: ''
        },
        leftBtn: {
            default: '取消'
        },
        rightBtn: {
            default: '确认'
        },
        leftCallback: {
            default: ''
        },
        rightCallback: {
            default: ''
        }
    },
    methods: {
        close() {
            if (this.leftCallback) {
                this.leftCallback();
            }
            this.isShow = false;
        },
        confirm() {
            if (this.rightCallback) {
                this.rightCallback();
            }
            this.isShow = false;
        },
        show() {
            this.isShow = true;
        }
    }
};
</script>
<style lang="less" scoped>
.confirm{
    position: fixed;
    box-sizing: border-box;
    z-index: 4;
    top: 50%;
    margin-top: -70px;
    width: 260px;
    left: 50%;
    margin-left: -130px;
    background: #FAFAFA;
    font-size: 14px;
    color: #1a1a1a;
    border-radius: 4px;
    background-color: white;
    .border-vertical{
        position: absolute;
        top: 0;
        left: 50%;
        width: 1px;
        height: 100%;
        background: #d9d9d9;
        transform-origin: 100% 100%;
        transform: scalex(0.6);
    }
    .title{
        font-size: 36/2px;
        text-align: center;
        padding: 40/2px 0 32/2px;
    }
    .content {
        position: relative;
        padding: 0 16px 16px;
    }
    .btn-wrap{
        display: flex;
        height: 100%;
        position: relative;
        .btn {
            border-radius: 0 0 4px 4px;
            height: 44px;
            line-height: 44px;
            color: #FF571A;
            font-size: 16px;
            text-align: center;
            flex: 1;
            width: 50%;
        }
        .cancel{
            color: black;
        }
    }

}
</style>
