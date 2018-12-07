<template lang="html">
    <div class="line-graph">
        <canvas ref="lineGraph" width="" height="" style="width: 100%; height: auto;">
        </canvas>
    </div>
</template>
<script>
// test data
//[{label: '2017.02', value: 16.08},
//        {label: '2017.05', value: 17.08},
//        {label: '2017.08', value: 14.08},
//        {label: '2017.11', value: 13.08},
//        {label: '2019.02', value: 1.3}
// ];
export default {
    data () {
        return {
            context: '',
            maxValue: 0,
            unitValue: 1,
            canvasWidth: 0,
            canvasHeight: 0,
            graphHeight: 0,
            configBase: {
                fillColor: '#FFDC00',
                unit: '万',
                spaceNum: 3,
                space: 64,
                dotRadius: 6,
                dotBorder: 4,
                bottomSpace: 30,
                font: '24px Arial',
                labelColor: '#666'
            },
            configs: {}
        };
    },
    props: {
        data: {
            type: Array,
            required: true
        },
        config: {
            default: null
        }
    },
    computed: {
    },
    created() {
        this.configs = Object.assign({}, this.configBase, this.config);
    },
    mounted () {
        let canvas = this.$refs.lineGraph;
        let canvasRate = 638 / 254;
        let width = parseInt(canvas.offsetWidth);
        canvas.width = width;
        canvas.height = width / canvasRate;
        this.configs.space = (64 * canvas.height) / 254;
        if (canvas.getContext) {
            this.context = canvas.getContext('2d');
            this.drawBackGround(this.context);
            this.drawGraph(this.context);
        } else {
            /* eslint-disable */
            alert('您的手机不支持canvas');
        }
    },
    methods: {
        drawBackGround(ctx) {
            this.canvasWidth = ctx.canvas.width;
            this.canvasHeight = ctx.canvas.height;
            this.graphHeight = this.canvasHeight - this.configs.bottomSpace;
            for (let i = 1, len = this.configs.spaceNum + 1; i < len; i++) {
                let y = this.graphHeight - i * this.configs.space;
                this.drawBackgroundLine(ctx, 0, y, this.canvasWidth, y, '#f3f3f3');
            }
            this.drawBackgroundLine(ctx, 0, this.graphHeight, this.canvasWidth, this.graphHeight, '#999');
        },
        drawBackgroundLine(ctx, x1, y1, x2, y2, color) {
            ctx.beginPath();
            ctx.moveTo(x1, y1 + 0.5);
            ctx.lineWidth = 1;
            ctx.strokeStyle = color;
            ctx.lineTo(x2, y2 + 0.5);
            ctx.stroke();
        },
        drawDot(ctx, x1, y1) {
            ctx.beginPath();
            ctx.arc(x1, y1, this.configs.dotRadius, 0, Math.PI * 2, false);
            ctx.lineWidth = this.configs.dotBorder;
            ctx.strokeStyle = this.configs.fillColor;
            ctx.stroke();
        },
        drawLabel(ctx, x, y, label) {
            ctx.beginPath();
            ctx.fillStyle = this.configs.labelColor;
            ctx.font = this.configs.font;
            ctx.fillText(label, x - ctx.measureText(label).width / 2, y);
        },
        drawDotAndLine(ctx, x1, y1, x2, y2) {
            this.drawDot(ctx, x2, y2);
            ctx.beginPath();
            ctx.moveTo(x2 - this.configs.dotRadius, y2);
            ctx.lineWidth = this.configs.dotBorder;
            ctx.strokeStyle = this.configs.fillColor;
            ctx.lineTo(x1 + this.configs.dotRadius, y1);
            ctx.stroke();
        },
        drawGraph(ctx) {
            let data = this.dealData();
            let spaceX = Math.floor(this.canvasWidth / data.length );
            let preDot = '';
            data.forEach((item, index) => {
                let x = spaceX / 2 + index * spaceX;
                let y = this.graphHeight - item.height;
                if (!preDot) {
                    this.drawDot(ctx, x, y);
                } else {
                    this.drawDotAndLine(ctx, spaceX / 2 + (index - 1) * spaceX, this.graphHeight - preDot, x, y);
                }
                this.drawLabel(ctx, x, this.canvasHeight, item.label);
                this.drawLabel(ctx, x, y - 20, `${item.value}${this.configs.unit}`);
                preDot = item.height;
            });
        },
        dealData() {
            this.maxValue = Math.ceil(this.getMaxValue());
            this.unitValue = this.maxValue / this.configs.spaceNum;
            let dealData = this.data.map((item) => {
                item.height = item.value / this.unitValue * this.configs.space;
                return item;
            });
            return dealData;
        },
        getMaxValue() {
            let max = 0;
            this.data.forEach((item) => {
                if (item.value > max) {
                    max = item.value;
                } 
            });
            return max;
        }
    },
    components: {},
    watch: {
        data: {
            handler(val) {
                this.drawGraph(this.context);
            }
        }
    }
};
</script>
<style lang="less" scoped>
.line-graph{
    margin: 0 20px;
}
</style>
