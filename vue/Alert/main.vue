<template>
    <div class="alert-container" v-if="isShow">
        <!-- <div class="mask"></div> -->
        <div class="alert">
        <div class="content">
            <div class="">
                {{msg}}
            </div>
            <div class="border">
            </div>
        </div>
        <div class="btn" @click="close()">
            我知道了
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
        msg: {
            type: String,
            default: ''
        },
        callback: {
            default: ''
        }
    },
    name: 'LKAlert',
    methods: {
        close() {
            this.isShow = false;
            console.log('callback', this.callback);
            if (this.callback) {
                this.callback();
            }
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
        margin-top: -70px;
        width: 260px;
        left: 50%;
        margin-left: -130px;
        background: #FAFAFA;
        font-size: 14px;
        color: #1a1a1a;
        border-radius: 4px;
        background-color: white;
        .content {
            position: relative;
            padding: 15px;
        }
        .btn {
            border-radius: 0 0 4px 4px;
            height: 44px;
            line-height: 44px;
            color: #FF571A;
            font-size: 16px;
            text-align: center;
        }
    }
}

</style>
