<template>
    <div class="fixed-top" v-if="isShowTip">
        <div class='fixed-top__header'>
            <img src="//img.souche.com/f2e/9e163a3d7aca57611ab856fa87975ec8.png" alt="" @click="isShowTip = false">
            请填写您支付时所用银行卡信息
        </div>
        <div class="fixed-top__placeholder"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isShowTip: true
        };
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {},
    components: {}
};
</script>
<style scoped lang='less'>
.fixed-top{
    .fixed-top__header{
        height: 88px;
        background: #FFFBCC;
        color: #666;
        font-size: 28px;
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        width: 100%;
        img{
            width: 16px;
            height: 16px;
            padding: 0 24px;
        }

    }
    .fixed-top__placeholder{
        height: 88px;
        width: 100%;
    }
}

</style>

