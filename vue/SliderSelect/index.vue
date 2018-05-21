<template lang="html">
    <div class="mf-picker">
        <div class="mf-picker-panel">
            <div class="mf-picker-choose">
                <span class="cancel" @click="close">取消</span>
                <span class="confirm" @click="confirm">确定</span>
            </div>
            <div class="mf-picker-content">
                <div class="mask-top"></div>
                <div class="mask-bottom"></div>
                <div class="wheel-wrapper">
                    <div class="wheel">
                        <ul class="wheel-scroll" ref="year">
                            <li v-for="year in years" class="wheel-item">{{year}}</li>
                        </ul>
                    </div>
                    <div class="wheel">
                        <ul class="wheel-scroll" ref="month">
                            <li v-for="month in months" class="wheel-item">{{month}}</li>
                        </ul>
                    </div>
                    <div class="wheel">
                        <ul class="wheel-scroll" ref="day">
                            <li v-for="day in days" class="wheel-item">{{day}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mf-picker-footer"></div>
        </div>
    </div>
</template>
<script>
import DateSlider from './date-slider.js';

export default {
    data() {
        return {
            years: [],
            months: [],
            days: [],
            today: '',
            currentSelect: 0,
            yearStartY: 0,
            monthStartY: 0,
            itemHeight: 60,
            selectYear: 0,
            selectMonth: 0,
            currentYear: '',
            monthSlider: '',
            daySlider: '',
            selectDay: 1
        };
    },
    props: ['longTime'],
    computed: {
    },
    created() {
        this.today = new Date();
        this.currentYear = this.today.getFullYear() + 30;
        this.createYears();
        this.createMonths();
        this.createDays();
        if (this.longTime) {
            this.selectYear = '长期';
            this.selectMonth = '长期';
        } else {
            this.selectYear = `${this.currentYear}年`;
            this.selectMonth = '1月';
            this.selectDay = '1日';
        }
    },
    mounted() {
        let yearSlider = new DateSlider(this.$refs.year, this.getYear);
        yearSlider.init();
        this.monthSlider = new DateSlider(this.$refs.month, this.getMonth);
        this.monthSlider.init();
        this.daySlider = new DateSlider(this.$refs.day, this.getDay);
        this.daySlider.init();
    },
    methods: {
        createYears() {
            let startYear = 1990;
            if (this.longTime) {
                this.years = Array.from({ length: (this.currentYear - startYear) + 1 }, (v, k) => `${k + startYear}年`);
                this.years.push('长期');
                this.years.reverse();
            } else {
                this.years = Array.from({ length: (this.currentYear - startYear) + 1 }, (v, k) => `${k + startYear}年`).reverse();
            }

        },
        createMonths(year) {
            this.months = Array.from({ length: 12 }, (v, k) => `${k + 1}月`);
            if (this.longTime && !parseInt(year)) {
                this.months.unshift('长期');
            }
        },
        createDays(year = 0, month = 0) {
            let day = 1;
            let today = new Date();
            if (!year && !month) {

                day = this.getDaysInOneMonth(today.getFullYear(), today.getMonth());

            } else {
                day = this.getDaysInOneMonth(parseInt(year), month);
            }
            if (year === '长期') {
                this.days = ['长期'];
                return;
            }
            this.days = Array.from({ length: day }, (v, k) => `${k + 1}日`);
            if (this.longTime && !year) {
                this.days.unshift('长期');
            }

        },
        getYear(index) {
            this.selectYear = this.years[index];
            this.createDays(this.selectYear, parseInt(this.selectMonth) || 1);
            this.daySlider.destory();
            this.$nextTick(() => {
                this.daySlider = new DateSlider(this.$refs.day, this.getDay);
                this.daySlider.init();
            });
        },
        getMonth(index) {
            this.selectMonth = this.months[index];
            this.createDays(this.selectYear, parseInt(this.selectMonth));
            this.daySlider.destory();
            this.$nextTick(() => {
                this.daySlider = new DateSlider(this.$refs.day, this.getDay);
                this.daySlider.init();
            });
        },
        getDaysInOneMonth(year, month) {
            month = parseInt(month, 10);
            var d = new Date(year, month, 0);
            return d.getDate();
        },
        getDay(index) {
            this.selectDay = this.days[index];
        },
        close() {
            this.$emit('close');
        },
        confirm() {
            let day = '';
            if (this.selectYear === '长期') {
                day = '长期';
            } else {
                day = `${parseInt(this.selectYear)}-${parseInt(this.selectMonth)}-${parseInt(this.selectDay)}`;
            }
            console.log(day);
            this.$emit('getDate', day);
        }
    },
    components: {}
};
</script>
<style lang="less" scoped>
* {
    padding: 0;
    margin: 0;
}

ul {
    padding-top: 20px;
}

.mf-picker {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-align: center;
    font-size: 32px;
    background-color: rgba(37, 38, 45, .4);
}

.mf-picker .mf-picker-panel {
    position: absolute;
    z-index: 600;
    bottom: 0;
    width: 100%;
    height: 480px;
    background: #fff;
}

.mf-picker .mf-picker-panel .mf-picker-choose {
    position: relative;
    height: 84px;
    color: #1a1a1a;
    background: #f2f2f2;
}

.mf-picker .mf-picker-panel .mf-picker-content {
    position: relative;
    top: 20px;
    height: 346px;
}

.mf-picker .mf-picker-panel .mf-picker-choose .cancel {
    left: 0;
}

.mf-picker .mf-picker-panel .mf-picker-choose .confirm {
    right: 0;
}

.mf-picker .mf-picker-panel .mf-picker-choose .mf-picker-title {
    margin: 0;
    line-height: 84px;
    font-weight: 400;
    text-align: center;
    font-size: 32px;
    color: #333;
}

.mf-picker .mf-picker-panel .mf-picker-choose .cancel,
.mf-picker .mf-picker-panel .mf-picker-choose .confirm {
    position: absolute;
    top: 6px;
    padding: 16px 32px;
    color: #1DBF6E;
}

.mf-picker .mf-picker-panel .mf-picker-content .mask-top {
    position: absolute;
    top: 0;
    height: 68px;
    background: -webkit-linear-gradient(bottom, hsla(0, 0%, 100%, .4), hsla(0, 0%, 100%, .8));
}

.mf-picker .mf-picker-panel .mf-picker-content .mask-bottom {
    position: absolute;
    bottom: 1px;
    height: 204px;
    background: linear-gradient(top, hsla(0, 0%, 100%, .4), hsla(0, 0%, 100%, .8));
    background: -webkit-linear-gradient(top, hsla(0, 0%, 100%, .4), hsla(0, 0%, 100%, .8));
}

.mf-picker .mf-picker-panel .mf-picker-content .mask-bottom,
.mf-picker .mf-picker-panel .mf-picker-content .mask-top {
    z-index: 10;
    width: 100%;
    pointer-events: none;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}

.border-top-1px:before {
    border-top: 1px solid #ebebeb;
    left: 0;
    top: 0;
    width: 100%;
}

.mf-picker .mf-picker-panel .wheel-wrapper {
    display: -webkit-box;
    display: flex;
    display: -webkit-flex;
    padding: 0 16px;
}

.mf-picker .mf-picker-panel .wheel-wrapper .wheel {
    -webkit-box-flex: 1;
    flex: 1;
    -webkit-flex: 1;
    flex-basis: 1e-9px;
    width: 1%;
    height: 346px;
    overflow: hidden;
    font-size: 30px;
}

.mf-picker .mf-picker-panel .wheel-wrapper .wheel .wheel-scroll {
    padding: 0;
    margin-top: 69px;
    line-height: 70px;
    list-style: none; // -webkit-transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}

.mf-picker .mf-picker-panel .wheel-wrapper .wheel .diff {
    -webkit-transition-duration: 150ms;
    transition-duration: 150ms;
}

.mf-picker .mf-picker-panel .wheel-wrapper .wheel .wheel-scroll .wheel-item {
    // -webkit-transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}
</style>
