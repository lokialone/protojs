<template>
    <div class="share-rank__date-wrapper">
        <!-- 占位勿删 -->
        <div class="space"></div>
        <!-- 占位勿删 -->
        <div class='share-rank__date-select'>
            <div
                :class="{'date-select-item': true, 'active': currentSelect === 'LastWeek'}"
                @click="select('LastWeek')">
                上周
            </div>
            <div
                :class="{'date-select-item': true, 'active': currentSelect === 'currentWeek'}"
                @click="select('currentWeek')">
                本周
            </div>
            <div
                :class="{'date-select-item': true, 'active': currentSelect === 'month'}"
                @click="select('month')">
                <span>{{ currentMonth }}月</span>
                <span :class="{'iconfont':true, 'icon-arrowdropdown': true, 'active': currentSelect === 'month'}"></span>
            </div>
            <div class="border"></div>
        </div>
        <div class="share-rank__date-panel">
            <transition name="fade">
                <div class="mask" v-if="show"></div>
            </transition>
            <transition name="slideDown">
                <div class="months" v-if="show">
                    <div class="month"
                        v-for="(item, index) in months"
                        :key="index"
                        @click="selectMonth(item)">
                        <div>{{item}}月</div>
                        <i class="icon-right"  v-if="currentMonth === item"></i>
                        <div class="border lf15"></div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
import Date from '@/utils/date.js';

export default {
    data() {
        return {
            months: [],
            currentMonth: 0,
            show: false,
            currentSelect: 'currentWeek'
        };
    },
    computed: {},
    created() {
        this.createMonths();

    },
    mounted() {},
    methods: {
        createMonths() {
            this.currentMonth = Date.getCurrentMonth();
            this.months = [this.currentMonth, this.getNextMonth(this.currentMonth), this.getNextMonth(this.getNextMonth(this.currentMonth))];
        },
        getNextMonth(num) {
            return num - 1 > 0 ? num - 1 : 12 - (num - 1);
        },
        select(item) {
            switch (item) {
                case 'currentWeek':
                    this.emitWeekDate(item);
                    break;
                case 'LastWeek':
                    this.emitLastWeekDate(item);
                    break;
                case 'month':
                    if (this.currentSelect === 'month') {
                        this.currentSelect = 'month';
                        this.show = !this.show;
                    } else {
                        this.currentSelect = 'month';
                        this.$emit('select-date', Date.getMonthStartDate(this.currentMonth), Date.getMonthEndDate(this.currentMonth));
                    }
                    break;
                default:
                    break;
            }
        },
        selectMonth(item, index) {
            this.currentMonth = item;
            switch (index) {
                case 0:
                    this.$bury('MSD_RANK_NMONTH_BTN');
                    break;
                case 1:
                    this.$bury('MSD_RANK_PMONTH_BTN');
                    break;
                case 2:
                    this.$bury('MSD_RANK_P1MONTH_BTN');
                    break;
                default:
                    break;
            }
            this.$emit('select-date', Date.getMonthStartDate(item), Date.getMonthEndDate(item));
            setTimeout(() => {
                this.show = false;
            }, 200);
        },
        emitLastWeekDate(item) {
            this.currentSelect = item;
            this.show = false;
            this.$emit('select-date', Date.getLastWeekStartDate(), Date.getLastWeekEndDate());
        },
        emitWeekDate(item) {
            this.currentSelect = item;
            this.show = false;
            this.$emit('select-date', Date.getCurrentWeekStartDate(), Date.getCurrentWeekEndDate());
        }
    },
    components: {}
};
</script>
<style scoped lang='less'>
@import '../../assets/less/var.less';
.share-rank__date-wrapper{
    .space{
        height: 88/2px;
    }
    .share-rank__date-select{
    display: flex;
    position: absolute;
    height: 88/2px;
    width: 100%;
    z-index: 2;
    top: 0;
    background: white;
    .date-select-item{
        width: 33.333333%;
        line-height: 88/2px;
        display: flex;
        text-align: center;
        justify-content: center;
        .icon-arrowdropdown{
            font-size: 24px;
            color: #999999;
        }
    }
    .active {
        color: @theme-color !important;
    }
}
.share-rank__date-panel{
    height: 100vh;
    position: absolute;
    width: 100%;
    z-index: 1;
    top: 44px;
    .months{
        height: 162px;
        .month{
            display: flex;
            justify-content: space-between;
            padding: 32/2px;
            position: relative;
            background: white;
        }
    }
    .mask{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, .4);
    }
}

}

</style>

