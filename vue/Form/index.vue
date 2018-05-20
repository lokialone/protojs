<template>
<div>
    <div class="card-form">
        <div class="card-form__content">
            <div class="car-form__item">
                <div class="label">店铺名称</div>
                <div class="input">
                    <div type="text"
                        class="input-item">
                        {{shopName}}
                    </div>
                </div>
            </div>
        </div>
    </div>
   <div class='card-form' v-for="(items, index) in formData" :key=index>
        <div class="card-form__title">
            {{items.label}}
        </div>
        <div class="card-form__content">
            <div v-for="(item, index1) in items.items" :key=index1>
                <!-- 普通输入框 -->
                <div class="car-form__item" v-if="item.type=== 'input'">
                    <div class="label">{{item.name}} <span class="theme-color">*</span></div>
                    <div class="input">
                        <input
                            class="input-item"
                            :placeholder="item.placeholder"
                            v-model="item.value"
                            :type="item.inputType || 'text'"
                            @focus="item.tip = false"
                            @blur="validate(item)">
                        <div class="warn-tips" v-if="item.tip">{{tip}}</div>
                    </div>
                     <div v-if="item.rightText">{{item.rightText}}</div>
                </div>
                <!-- 地区选择 -->
                <div class="car-form__item" v-if="item.type=== 'area'">
                    <div class="label">{{item.name}} <span class="theme-color">*</span></div>
                    <div class="input">
                        <div
                            class="input-item"
                            @click="areaSelect"
                            :type="item.inputType || 'text'">
                            {{item.areaString}}
                        </div>
                        <div class="warn-tips" v-if="item.tip">{{tip}}</div>
                    </div>
                     <div v-if="item.rightText">{{item.rightText}}</div>
                </div>
                <!-- 时间范围选择 -->
                <div class="car-form__item" v-if="item.type=== 'date-range-select'">
                    <div class="label">{{item.name}} <span class="theme-color">*</span></div>
                    <div class="input">
                        <div type="text"
                            class="input-item"
                            @click="selectTime(item, 'fromDate')">
                            开始时间: &nbsp;{{item.fromDate}}
                        </div>
                        <div class="warn-tips" v-if="item.startTimeTip">{{tip}}</div>
                        <div type="text"
                            class="input-item"
                            @click="selectTime(item, 'toDate')">
                            结束时间: &nbsp; {{item.toDate}}
                        </div>
                        <div class="warn-tips" v-if="item.endTimeTip">{{tip}}</div>
                    </div>
                     <div v-if="item.rightText">{{item.rightText}}</div>
                </div>
                <!-- 单选 -->
                <div class="car-form__item card" v-if="item.type === 'radio'">
                    <div class="label">{{item.name}} <span class="theme-color">*</span></div>
                    <div class="input blank-card-type">
                        <Radio
                            v-model="item.value"
                            :val="select.value"
                            :label="select.label"
                            v-for="(select, index2) in item.selects"
                            :key=index2 />
                    </div>
                </div>
                <!-- 单选并且输入 -->
                <div class="car-form__item radio-and-input" v-if="item.type === 'radioAndInput'">
                    <div class="label">{{item.name}} <span class="theme-color">*</span></div>
                    <div class="radio-wrapper">
                        <div class="input blank-card-type">
                            <Radio
                                v-model="item.radioValue"
                                :val="select.value"
                                :label="select.label"
                                v-for="(select, index2) in item.selects"
                                :key=index2 />
                        </div>
                        <div class="input">
                            <input
                                class="input-item"
                                :placeholder="item.placeholder"
                                v-model="item.value"
                                :type="item.inputType || 'text'"
                                @focus="item.tip = false"
                                @blur="validate(item)">
                            <div class="warn-tips" v-if="item.tip">{{tip}}</div>
                        </div>
                    </div>
                </div>
                <!-- 图片选择 -->
                <div
                    class="car-form__item"
                    style="height: 160px"
                    v-if="item.type === 'photo'">
                    <div class="label">{{item.name}} <span class="theme-color">*</span></div>
                    <div class="images">
                         <PhotoUpload
                            v-for="(img, index) in item.needs"
                            @select="setImage"
                            :index="index"
                            style="padding-right: 10px;"
                            :item="item"
                            :key="index" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <DateSelect
        :longTime="longTime"
         v-if="showDateSelect"
         @close="showDateSelect = false; longTime = false"
         @getDate="setDate" />
    <AreaSelector :show="showAreaSelect" @close="showAreaSelect = false"/>
</div>
</template>
<script>
import Radio from '@/components/common/Radio.vue';
import DateSelect from '@//components/common/date-select/index.vue';
import { validateOne } from './form-validate.js';
import PhotoUpload from './PhotoUpload.vue';
import formData from './form-data.json';
import AreaSelector from '../AreaSelector.vue';

const NORMOL_TIP = '请输入正确的信息';

export default {
    data() {
        return {
            formData: formData,
            tip: NORMOL_TIP,
            longTime: true,
            showDateSelect: false,
            time: '',
            type: '',
            showAreaSelect: false
        };
    },
    props: ['shopName'],
    created() {},
    methods: {
        validate(item, value) {
            console.log(value);
            if (value) {
                item[`${value}Tip`] = !validateOne(item.key, item[value]);
            } else {
                item.tip = !validateOne(item.key, item.value);
            }

            this.$emit('validate');
        },
        setImage(item, index, imageUrl) {
            item.value[index].value = imageUrl;
        },
        selectTime(item, type) {
            item[`${type}Tip`] = false;
            this.time = item;
            this.type = type;
            this.showDateSelect = true;
            this.longTime = type === 'toDate';

        },
        setDate(time) {
            this.time[this.type] = time;
            this.showDateSelect = false;
            this.time[`${this.type}Tip`] = false;
        },
        areaSelect() {
            // this.$router.push({path: 'area' });
            this.showAreaSelect = true;
        }
    },
    components: {
        Radio,
        PhotoUpload,
        DateSelect,
        AreaSelector
    }
};
</script>
<style scoped lang='less'>
.card-form{
    font-size: 28px;
    text-align: left;
    color: #333;

    .card-form__title{
        font-size: 28px;
        color: #666;
        position: relative;
        padding: 40px 0 20px 24px;
         .delete-form{
            position: absolute;
            right: 24px;
            color: #FF3B30;
            top: 40px;
        }
    }
    .card-form__content{
        background: white;
        padding-left: 24px;
        .car-form__item{
            min-height: 100px;
            border-bottom: 1px solid #eee;
            // box-sizing: border-box;
            display: flex;
            align-items: center;
            padding-right: 32px;
            // &:last-child {
            //     border: none;
            // }
            div:first-child{

            }
            .blank-card-type{
                display: flex;
                align-items: center;
            }
            .input {
                flex: 1;
            }
            .label{
                width: 230px;/*rem*/
                height: 100px;
                line-height: 100px;
            }
            .input-item{
                border: none;
                font-size: 28px;
                padding: 33px 0;
                caret-color: #ff5000;
                width: 100%;
            }
            .warn-tips{
                font-size: 24px;
                color: #FF3B30;
                margin-top: -20px;
                margin-bottom: 36px;
            }
        }
        .card{
            height: 120px;
            .label{
                height: 120px;
                line-height: 120px;
            }
        }
        .images{
            display: flex;
            padding: 20px 0;
        }
        .radio-and-input{
            .radio-wrapper {
                margin-top: 32px;
            }
            .input{
                width: 480px !important;
            }
        }
    }

}
</style>

