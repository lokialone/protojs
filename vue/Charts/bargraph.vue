<template lang="html">
    <div class="bar-graph">
        <canvas ref="barGragh" width="630" height="600" style='width: 315px; height300px'>
        </canvas>
    </div>
</template>
<script>
export default {
    data () {
        return {
            context: '',
            fillColor: '#FFDC00',
            data: [14.95, 16.08, 19.69],
            unit: '万',
            maxValue: 0,
            unitValue: 1,
            spaceNum: 3,
            space: 64,
            barWidth: 8,
            canvasWidth: 0,
            canvasHeight: 0
        };
    },
    props: [],
    computed: {
    },
    created() {
    },
    mounted () {
        let canvas = this.$refs.barGragh;
        if (canvas.getContext) {
            this.context = canvas.getContext('2d');
            this.drawBackGround(this.context);
            this.drawBars(this.context);
        } else {
            /* eslint-disable */
            alert('您的手机不支持canvas');
        }
    },
    methods: {
        drawBackGround(ctx) {
            this.canvasWidth = ctx.canvas.width;
            this.canvasHeight = ctx.canvas.height;
            for (let i = 1, len = this.spaceNum + 1; i < len; i++) {
                this.drawLine(ctx, 0, this.canvasHeight - i * this.space, this.canvasWidth, this.canvasHeight -i * this.space);
            }
        },
        drawLine(ctx, x1, y1, x2, y2) {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#f3f3f3';
            ctx.lineTo(x2, y2);
            ctx.stroke();
        },
        drawBars(ctx) {
            let data = this.dealData();
            let spaceX = Math.floor(this.canvasWidth / data.length );
            data.forEach((item, index) => {
                this.drawBarRect(ctx, spaceX / 2 + index * spaceX, item);
            });
        },
        drawBarRect (ctx, x, h) {
            ctx.beginPath();
            ctx.fillStyle = this.fillColor;
            ctx.fillRect(x, this.canvasHeight - h, this.barWidth, h);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(x + this.barWidth / 2, this.canvasHeight - h , this.barWidth / 2, 0, Math.PI, true);
            ctx.fill();
        },
        dealData() {
            let max = Math.max.apply(null, this.data);
            this.maxValue = Math.ceil(max);
            this.unitValue = this.maxValue / this.spaceNum;
            let dataRes = this.data.map((item) => item / this.unitValue * this.space); 
            return dataRes;
        }
    },
    components: {}
};
</script>
<style lang="less" scoped>
.bar-graph{
    margin-left: 50px;
    canvas{
        border-bottom: 1px solid #D9D9D9;
    }
}
</style>
