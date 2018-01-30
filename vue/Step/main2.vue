<template>
    <div class="steps-container">
        <div :class="{steps: true,
            finish: index < status && status < 5,
            active: index === status && status < 5 }"
            v-for="(i,index) in orderStatus"
            :key="index">
            <span v-if="status < 5"
            :class="{
                    finish: index < status && status < 5,
                    active: index === status && status < 5}">
            {{index >= status ? index + 1 : '&nbsp;'}}
            </span>
            <span v-else> {{index + 1}}</span>
            <div class="pt16">{{i}}</div>
        </div>

    </div>
</template>
<script>
import ORDER_CODE from '@/const/order-status.js';

const ORDER_STATUS = ['签署协议', '支付定金', '支付尾款', '提车完成'];

export default {
    data() {
        return {
            orderStatus: ORDER_STATUS
        };
    },
    props: {
        data: {
            required: true,
            default: 100
        }
    },
    computed: {
        status() {
            if (parseInt(this.data) > 500) {
                return 5;
            }
            let tmp = ORDER_CODE.filter(item => item.code === this.data);
            return tmp[0] ? tmp[0].status : 0;
        }
    },
    mounted() {},
    methods: {},
    components: {}
};
</script>
<style scoped lang='less'>
.steps-container {
    height: 84px;
    display: inline-block;
    font-size: 0;
    .steps {
        width: 164px;
        display: inline-block;
        position: relative;
        text-align: center;
        font-size: 24px;
        padding-top: 48px;
        color: #999;
        span {
            width: 44px;
            font-size: 26px;
            height: 44px;
            line-height: 36px;
            display: inline-block;
            box-sizing: border-box;
            border: 4px solid #e6e6e6;
            border-radius: 50%;
            color: #DDDDDD;
            &.finish {
                background-color: #FF571A;
                background-image: url('//img.souche.com/f2e/ee20d767bac9f5bd38ad4d03aa0e1a36.png');
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                border-color: #FF571A;
            }
            &.active{
                border-color: #FF571A;
                color: #FF571A;
            }

        }
        &.active::before {
            border-color: #FF571A;
        }
        // &::before {
        //     content: '';
        //     box-sizing: border-box;
        //     position: absolute;
        //     width: 44px;
        //     font-size: 26px;
        //     line-height: 44px;
        //     height: 44px;
        //     border-radius: 50%;
        //     border: 4px solid #e6e6e6;
        //     bottom: 50px;
        //     left: 50%;
        //     z-index: 2;
        //     transform: translate(-50%, 0);
        // }
        &:not(:last-child)::after {
            content: '';
            height: 4px;
            width: 88px;
            position: absolute;
            background: #e6e6e6;
            left: 50%;
            margin-left: 40px;
            bottom: 65px;
        }
        &.finish::before {
            background-color: #FF571A;
            background-image: url('//img.souche.com/f2e/ae2ebcb310fb05d6ea2d9668f0ac7ba4.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            border-color: #FF571A;
        }
        &.finish::after {
            background: #FF571A;
        }
    }
}
</style>

