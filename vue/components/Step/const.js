const ORDER_CODE = [
    {
        code: '100',
        desc: '新建订单，初始状态',
        status: 0
    },
    {
        code: '110',
        desc: '已签署合同',
        status: 1
    },
    {
        code: '150',
        desc: '定金付款中',
        status: 1
    },
    {
        code: '200',
        desc: '定金支付',
        status: 2
    },
    {
        code: '300',
        desc: '确认交车',
        status: 3
    },
    {
        code: '310',
        desc: '确认提车',
        status: 3
    },
    {
        code: '400',
        desc: '提车',
        status: 5
    },
    {
        code: '410',
        desc: '提车',
        status: 5
    },
    {
        code: '450',
        desc: '提车',
        status: 5
    },
    {
        code: '460',
        desc: '已提车, 销售凭证不通过',
        status: 5
    },
    {
        code: '500',
        desc: '订单完成',
        status: 5
    },
    {
        code: '510',
        desc: '订单取消',
        status: 6
    }
];

export default ORDER_CODE;

