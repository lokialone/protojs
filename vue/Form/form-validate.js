import Toast from '@/components/common/toast/main.js';
import formData from './form-data.json';

function findNameFromData(type) {
    for (let i = 0, len = formData.length; i < len; i += 1) {
        for (let j = 0, len1 = formData[i].items.length; j < len1; j += 1) {
            let item = formData[i].items[j];
            if (item.key === type) return item.name;
        }
    }
}

export function validateBankCard(value) {
    return value.length >= 19;
}

export function validatePhone(value) {
    return value.length === 11;
}

export function validateIdCard(value, type) {
    let flag = value.length === 18;
    if (!flag) {
        let errorMsg = findNameFromData(type);
        Toast.show({'info': `${errorMsg}未正确填写`});
    }
    return flag;
}

export function validateNotNull(value, type) {
    let flag = value !== '' && value !== null;
    if (!flag) {
        let errorMsg = findNameFromData(type);
        Toast.show({'info': `${errorMsg}未正确填写`});
    }
    return flag;
}
export function validateOne(type, value) {
    switch (type) {
        case 'bankCardNo':
            return validateBankCard(value, type);
        case 'bankReservationNumber':
            return validatePhone(value, type);
        case 'identityCode':
            return validateIdCard(value, type);
        default:
            return validateNotNull(value, type);
    }
}


export function validateAll(data) {
    /* eslint-disable */
    for (let item in data) {
        // console.log('', item, validateOne(item, data[item]));
        if (!validateOne(item, data[item])) return false;
    }
    return true;
}


export default {
    validateOne,
    validateAll
};
