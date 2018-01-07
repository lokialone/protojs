<template>
    <div class="steps-container">
        <span
            :class="{steps: true,
                    finish: index < status && status < 6,
                    active: index === status && status < 6 }"
            v-for="(i,index) in orderStatus"
            :key="index">{{i}}
        </span>
    </div>
</template>
<script>
import ORDER_CODE from './const.js';

const ORDER_STATUS = ['合同签订', '支付定金', '车辆备货', '提车', '完成'];

export default {
    // render: function (createElement) {
    //     return createElement('div', { attrs: { 'class': 'steps-container' } },
    //         ORDER_STATUS.slice(0, 5).map((ele, index) => {
    //             let classStr = 'steps';
    //             if (index < parseInt(this.status) && this.status < 6) {
    //                 classStr += ' finish';
    //             }
    //             if (index === parseInt(this.status) && this.status < 6) {
    //                 classStr += ' active';
    //             }
    //             return createElement('span', { attrs: { 'class': classStr } }, ele);
    //         })
    //     );
    // },
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
                return 6;
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
    height: 70px;
    padding-top: 50px;
    display: inline-block;
    margin: auto;
    font-size: 0;
    .steps {
        width: 122px;
        display: inline-block;
        position: relative;
        text-align: center;
        font-size: 20px;
        &.active::before {
            border-color: #FF571A;
        }
        &::before {
            content: '';
            box-sizing: border-box;
            position: absolute;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 4px solid #e6e6e6;
            bottom: 50px;
            left: 50%;
            z-index: 2;
            transform: translate(-50%, 0);
        }
        &:not(:last-child)::after {
            content: '';
            height: 4px;
            width: 97px;
            position: absolute;
            background: #e6e6e6;
            left: 50%;
            margin-left: 14px;
            bottom: 62px;
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

