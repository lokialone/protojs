import Toast from '@/components/common/toast/main.js';

const desc = {
    companyName: '公司名称',
    area: '所在地区',
    place: '公司地址',
    companyType: '公司性质',
    registCapital: '注册资本',
    fromDate: '营业期限',
    toDate: '营业期限',
    creditCode: '统一信用代码',
    businessLicenceNumber: '营业执照编号',
    shopBrandPic: '店铺门头图片',
    businessLicencePic: '营业执照照片',
    corporationName: '法人姓名',
    identityCode: '身份证号码',
    identityCardCorrect: '身份证正面照片',
    identityCardOpposite: '身份证反面照片'
};

export function validateIdCard(value) {
    let flag = value.length === 18;
    return flag;
}

export function validateNotNull(value) {
    let flag = value !== '' && value !== null;
    return flag;
}

export function validateOne(type, value) {
    switch (type) {
        case 'identityCode':
            return validateIdCard(value);
        default:
            return validateNotNull(value);
    }
}

export function validateOneAndToast(type, value) {
    if (type === 'areaString') {
        return true;
    }
    if (!validateOne(type, value)) {
        let errorMsg = desc[type];
        Toast.show({'info': `${errorMsg}未正确填写`});
        return false;
    } else {
        return true;
    }

}

export function validateAll(data) {
    /* eslint-disable */
    for (let item in data) {
        // console.log('', item, validateOne(item, data[item]));
        if (!validateOneAndToast(item, data[item])) return false;
    }
    return true;
}



export default {
    validateOne,
    validateAll
};
