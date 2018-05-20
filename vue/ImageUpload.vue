<template>
    <div class='photo-upload'>
        <label>
            <input type="file" accept="image/*" @change="image" style="display:none">
            <img :src="imageUrl">
            <div style="color: #a0a0a0; text-align:center">{{item.descs[index]}}</div>
        </label>

    </div>
</template>
<script>
import { imageUpload } from '@/api/index.js';

let defaultValue = '//img.souche.com/f2e/1004b088502a15ef0368c5407de50233.png';
export default {
    data() {
        return {
            // imageUrl: defaultValue

        };
    },
    props: ['index', 'item'],
    created() {
        this.imageUrl = this.item.value[this.index].value || defaultValue;
    },
    mounted() {
    },
    computed: {
        imageUrl: {
            get() {
                return this.item.value[this.index].value || defaultValue;
            },
            set (value) {
                this.item.value[this.index].value = value;
            }
        }
    },
    methods: {
        image(input) {
            let file = input.target.files[0];
            imageUpload(file).then((res) => {
                this.imageUrl = res.data.path;
                this.$emit('select', this.item, this.index, this.imageUrl);
            });
        }
    }
};
</script>
<style scoped lang='less'>
.photo-upload{
    position: relative;
    display: inline-block;
    height: 210px;
    img{
        width: 210px;/*rem*/
        height: 210px;/*rem*/
        position: relative;
        border: 1px solid #efefef;
    }
    .success{
        position: absolute;
        width: 48px;
        height: 48px;
        top: 8px;
        left: 160px;
        z-index: 9;
        border: none !important;
    }
    span{
        font-size: 24px;
        color: #999;
    }
    .img-mask{
        position: absolute;
        width: 210px;
        height: 40px;
        background: rgba(0 , 0, 0, 0.3);
        bottom: 0;
        font-size:24px;
        text-align: center;
        color: white;
        line-height: 40px;
        img{
            width: 48px;
            height: 48px;
            margin-top: 40px;
        }
    }
}
</style>

