<template>
    <div class="confirm">
        <div class="title">
            {{ title }}
        </div>
        <div class="content">
            <div class="" v-if="content">
                {{ content }}
            </div>
            <div v-else class="content-for-out">
                <slot>

                </slot>
            </div>

        </div>
        <div class="btn-wrap">
            <div class="confirm__btn cancel" @click="close()">
                {{ leftBtn }}
            </div>
            <div class="confirm__btn" @click="confirm()">
                {{ rightBtn }}
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
        }
    },
    methods: {
        close() {
            this.$emit('left-click');
        },
        confirm() {
            this.$emit('right-click');
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
    width: 540px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #FAFAFA;
    font-size: 28px;
    color: #1a1a1a;
    border-radius: 14px;
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
        font-size: 36px;
        text-align: center;
        padding: 42px 0 26px;
    }
    .content {
        position: relative;
        font-size: 28px;
        padding: 0 42px 26px 57px;
        text-align: center;
        max-height: 568px;
        overflow: scroll;
        box-sizing: content-box;
        .content-for-out{
            text-align: left;
            color: #888;
            line-height: 42px;
        }
    }
    .btn-wrap{
        display: flex;
        height: 100%;
        position: relative;
        font-size: 36px;
        border-top: 1px solid #eee;
        .confirm__btn {
            border-radius: 0 0 14px 14px;
            height: 100px;
            line-height: 100px;
            color: #FF571A;
            text-align: center;
            flex: 1;
            width: 50%;
        }
        .cancel{
            color: black;
            border-right: 1px solid #eee;
        }
    }

}
</style>
