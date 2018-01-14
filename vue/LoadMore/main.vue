<template>
    <div class="loading" v-show="isShow">
        <div class="state-loading" v-if="state == 'loading'">
           <i class="loading-icon"></i> {{showText}}
        </div>
        <div class="state-end" v-if="state == 'end'">
            没有更多内容啦~
        </div>

    </div>
</template>

<script>
export default {
    name: 'load-more',
    data() {
        return {
            showText: '加载中...',
            onPageBottom: false,
            state: 'loading'
        };
    },
    created() {
        window.addEventListener('scroll', () => {
            this.onScroll();
        });
    },
    props: {
        isShow: {
            default: false
        }
    },
    destroyed() {
        this.onPageBottom = false;
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
                this.$emit('onPageBottom');
            }
        },
        show() {
            this.state = 'loading';
            this.isShow = true;
        },
        close() {
            this.isShow = false;
        },
        end() {
            this.isShow = true;
            this.state = 'end';
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
    font-size: 24/2px;
    .state-loading{
        display: flex;
        justify-content: center;
        align-items: center;
    }
     .loading-icon{
        display: inline-block;
        width: 30/2px;
        height: 30/2px;
        margin-right: 14/2px;
        background: url('//img.souche.com/20170417/png/242b07c606eed2c788f25227fbf22a80.png') no-repeat;
        background-size: contain;
        animation: keeprotate 1s linear infinite;
    }
}
</style>
