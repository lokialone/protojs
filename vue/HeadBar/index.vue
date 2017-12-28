<template>
    <div class='header theme-bg-color'>
        <div
            :class="[icon, 'iconfont', 'header-icon-left']"
            @click="leftClick">
        </div>
        {{title}}
        <div
            v-if="search"
            class="iconfont icon-search header-icon-right"
            @click="rightClick">
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
            default: ''
        },
        search: {
            default: false
        },
        icon: {
            default: 'icon-page-left'
        }
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {
        rightClick() {
            this.$emit('right-click');
        },
        leftClick() {
            this.$emit('left-click');
        }
    },
    components: {}
};
</script>
<style scoped lang='less'>
.header{
    height: 88px;
    line-height:88px;
    font-size: 28px;
    color: white;
    font-weight: bold;
    letter-space: 4px;
    text-align: center;
    width: 100%;
    position: fixed;
    z-index: 9999;
    .header-icon-left{
        font-size: 40px;
        font-weight: bold;
        padding-right: 16px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 20px;
    }
    .header-icon-right{
        font-size: 40px;
        font-weight: bold;
        padding-right: 16px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 10px;
    }
}
</style>

