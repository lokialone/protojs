<template>
    <div class="alert-container">
        <div class="mask" @click="close"></div>
        <div class="alert">
            <div class="alert__content">
                <div class="alert__title">{{ title }}</div>
                <slot></slot>
                <div class="alert__main-info" v-if="msg">
                    <div class="">
                        {{ msg }}
                    </div>
                </div>
            </div>
            <div class="alert__btn" @click="close()">
                我知道了
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        msg: {
            type: String,
            default: ''
        },
        callback: {
            default: ''
        },
        title: {
            type: String,
            default: '标题'
        }
    },
    methods: {
        close() {
            this.$emit('close');
        },
        show() {
            this.isShow = true;
        }
    }
};
</script>
<style lang="less" scoped>
.alert-container{
    position: fixed;
    top: 0;
    min-height: 100vh;
    width: 100%;
    .mask{
        position: fixed;
        height: 100%;
        width: 100%;
        z-index: 99;
        background: rgba(0, 0, 0, .5);
    }
    .alert {
        position: fixed;
        z-index: 100;
        box-sizing: border-box;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #FAFAFA;
        font-size: 32px;
        color: #1a1a1a;
        border-radius: 14px;
        background-color: white;
        text-align: center;
        .content {
            position: relative;
            padding: 15px;
        }
        .alert__content{
            padding: 42px;
            color: #888;
            font-size: 32px;
            line-height: 42px;
        }
        .alert__title{
            text-align: center;
            color: #000;
            font-size: 36px;
            padding-bottom: 26px;
        }
        .alert__btn {
            border-radius: 0 0 14px 14px;
            height: 100px;
            line-height: 100px;
            color: #FF571A;
            font-size: 36px;
            text-align: center;
            border-top: 1px solid #e5e5e5; /**/
        }
    }
}

</style>
