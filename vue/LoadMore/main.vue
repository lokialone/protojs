<template>
    <div class="loading">
        {{showText}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            showText: ''
        };
    },
    created() {
        window.addEventListener('scroll', () => {
            this.onScroll();
        });
    },
    props: {
        // 是否能够加载
        canLoad: {
            type: Boolean,
            required: true,
            default: false
        },
        // 数据加载完毕
        end: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    destroyed() {
        // window.onscroll = undefined;
    },
    methods: {
        //距顶高度
        getDocumentHeight() {
            let scrollTop = 0;
            let bodyScrollTop = 0;
            let documentScrollTop = 0;

            if (document.body) {
                bodyScrollTop = document.body.scrollTop;
            }
            if (document.documentElement) {
                documentScrollTop = document.documentElement.scrollTop;
            }
            scrollTop = (bodyScrollTop - documentScrollTop > 0) ?
                (bodyScrollTop) : documentScrollTop;
            return scrollTop;
        },
        //可视窗口高度(固定)
        getWindowHeight() {
            let windowHeight = 0;
            if (document.compatMode === 'CSS1Compat') {
                windowHeight = document.documentElement.clientHeight;
            } else {
                /* istanbul ignore next */
                windowHeight = document.body.clientHeight;
            }
            return windowHeight;
        },
        //滚动条高度(固定)
        getScrollHeight() {
            let scrollHeight = 0;
            let bodyScrollHeight = 0;
            let documentScrollHeight = 0;
            if (document.body) {
                bodyScrollHeight = document.body.scrollHeight;
            }
            if (document.documentElement) {
                documentScrollHeight = document.documentElement.scrollHeight;
            }
            let compare = bodyScrollHeight - documentScrollHeight;
            scrollHeight = (compare > 0) ? bodyScrollHeight : documentScrollHeight;
            return scrollHeight;
        },
        onScroll() {
            //当滚动条到底时触发，滚动条高度(只读) = 可视窗口高度(固定) + 距顶高度
            if (this.getScrollHeight() ===
                this.getWindowHeight() + this.getDocumentHeight()) {
                if (this.canLoad) {
                    this.$emit('loading');
                }
            }
        }
    },
    watch: {
        end(val) {
            if (val) {
                this.showText = '';
            } else {
                this.showText = '正在加载...';
            }
        }
    }
};
</script>
<style lang="less" scoped>
.loading {
    text-align: center;
    color: #9d9d9d;
    padding-top: 10px;
    padding-bottom: 10px;
    clear: both;
    font-size: 24px;
}
</style>
