<template lang="html">
    <div class="container" :style="containerStyle">
        <slot name='content'>不输入显示这个0.0</slot>
        <transition name="fade">
            <div class="mask" @click='close()' v-if="show">
            </div>
        </transition>
        <slot name="dialog"> </slot>
    </div>
</template>
<script>
export default {
    props: ['show'],
    data() {
        return {
            scrollY: 0,
            stopScrollY: 0,
            containerStyle: {
                position: '',
                top: '',
                transform: ''
            }
        };
    },
    computed: {},
    methods: {
        close() {
            this.$emit('close');
        }
    },
    components: {
    },
    watch: {
        show() {
            if (this.show === true) {
                this.stopScrollY = window.scrollY;
                this.containerStyle.position = 'fixed';
                this.containerStyle.top = `-${this.stopScrollY}px`;
                this.containerStyle.transform = 'transform(0,0)';
            } else {
                this.containerStyle.position = 'static';
                setTimeout(() => {
                    window.scrollTo(0, this.stopScrollY);
                    this.containerStyle.transform = `transform(0,${this.stopScrollY})`;
                }, 0);

            }
        }
    }
};
</script>

<style lang="less" scoped>
.container {
    width: 100%;
    height: 100%;
    position: relative;
}

.mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.4);
}
.fade-enter-active {
    transition: opacity .6s
}
.fade-leave-active {
    transition: opacity 1s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
}
</style>
