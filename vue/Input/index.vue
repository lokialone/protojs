<template>
    <div class="basic-input-wrapper">
        <div class='basic-input'>
            <i :class="[normalStyle, icon]"></i>
            <input :type="type"
                v-bind:value="value"
                v-on:input="update($event.target.value)"
                :placeholder="placeholder"
            >
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            normalStyle: 'basic-input-icon iconfont'
        };
    },
    props: ['icon', 'value', 'placeholder', 'type'],
    computed: {},
    created() {},
    mounted() {},
    methods: {
        update(val) {
            this.$emit('input', val);
        }
    },
    components: {}
};
</script>
<style scoped lang='less'>
@import '../../assets/less/var.less';
.basic-input-wrapper{
    display: inline-block;
    width: @input-width;
    background: white;
    .basic-input{
        border: 1px solid gray;
        border-radius: 8px;
        width: @input-width;
        height: 80px;
        display: flex;
        align-items: center;
        .basic-input-icon {
            font-size: 40px;
            display: inline-block;
            color: black;
            padding: 0 16px;
        }

        input {
            border: none;
            flex: 1;
            padding: 0;
            font-size: 28px;
            border-radius: 8px;
            padding-right: 16px;
        }
    }
}

</style>

