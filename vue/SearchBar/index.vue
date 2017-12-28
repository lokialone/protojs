<template>
    <div class="search-bar-wrap">
        <transition name="fade">
            <div class="mask" v-if="flag" @click="flag=false"></div>
        </transition>
        <div class='header theme-bg-color'>
            <div
                :class="[icon, 'iconfont', 'header-icon-left']"
                @click="leftClick">
                </div>
                <div class="search-bar">
                    <i class="iconfont icon-search"></i>
                    <input type="text" v-model="keyword" placeholder="请输入关键字" @focus="autoComplete">
                </div>
                <div
                    class="header-icon-right"
                    @click="rightClick('')">
                    搜索
            </div>
            <transition name="fade">
                <div class="auto-complete" v-if="flag">
                    <div v-if="searchList.length">
                        <div class="auto-complete-item"
                            v-for="(item, index) in searchList"
                            :key="index"
                            @click.self="rightClick(item)"
                            >{{item}}
                            <em class="iconfont icon-close1" @click.self="clear(item)"></em>
                        </div>
                        <div class="auto-complete-item delete">
                            <em class="iconfont icon-delete" @click="clearAllRecord">清空所有记录</em>
                        </div>
                    </div>
                    <div v-else class="no-data">
                        暂无搜索记录
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
import { getSearchData, clearSearchData, clearAllSearchData } from '@/store/index.js';

export default {
    data() {
        return {
            keyword: '',
            flag: false,
            hasDataFlag: true,
            searchList: []
        };
    },
    props: {
        icon: {
            default: 'icon-page-left'
        }
    },
    computed: {},
    created() {
        this.searchList = getSearchData();
    },
    mounted() {},
    methods: {
        rightClick(item) {
            console.log('item', item);
            this.flag = false;
            this.$emit('right-click', item || this.keyword);
        },
        leftClick() {
            history.go(-1);
        },
        clear(item) {
            clearSearchData(item);
            this.searchList = getSearchData();
        },
        clearAllRecord() {
            clearAllSearchData();
            this.searchList = [];
            this.hasDataFlag = false;
        },
        autoComplete() {
            this.searchList = getSearchData();
            this.flag = true;
        }
    },
    components: {}
};
</script>
<style scoped lang='less'>
.search-bar-wrap{
    min-height: 100vh;
    position: absolute;
    .mask{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9999;
        background-color: rgba(0, 0, 0, 0.4);
    }
    .header{
        height: 88px;
        line-height:88px;
        font-size: 28px;
        color: white;
        font-weight: bold;
        text-align: center;
        width: 100%;
        position: fixed;
        z-index: 9999;
        transform: translateZ(120px);
        .search-bar{
            height: 70px;
            line-height:70px;
            display: inline-block;
            width: 70%;
            margin: 0 auto;
            border-bottom: 1px solid white;
            text-align: left;
            display: flex;
            input {
                background: transparent;
                border: none;
                line-height: 40px;
                margin-top: 20px;
                color: white;
                &::placeholder {
                    color: white;
                }
            }
            .icon-search{
                font-size: 40px;
                margin-top: 20px;
                padding-right: 10px;
            }
        }
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
            font-size: 28px;
            font-weight: bold;
            padding-right: 16px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 10px;
        }
        .auto-complete{
            position: relative;
            width: 100%;
            padding: 0 16px;
            top: 10px;
            color: black;
            background: white;
            box-sizing: border-box;
            border: 1px solid #dfdfdf;
            z-index: -1;
            font-weight: 400;
            .auto-complete-item{
                height: 72px;
                line-height: 72px;
                border-bottom: 1px solid #dfdfdf;
                text-align: left;
                &:last-child{
                    border-bottom: none;
                }
                em {
                    font-size: 32px;
                    float: right;
                    padding-top: 14px;
                }
                &.delete{
                    text-align: center;
                    em {
                        float: none;
                    }
                }
            }
        }
        .no-data{
            height: 72px;
            line-height: 72px;
            text-align: center;
        }
        @keyframes slideInDown {
            from {
                transform: translate(0, -100%);
                visibility: visible;
            }

            to {
                transform: translate(0, 0);
                // opacity: 1;
            }
        }
        .slideDown-enter-active {
            animation: slideInDown .5s;
        }
        .slideDown-leave-active {
            animation: slideInDown .5s reverse;
        }
    }
}

</style>

