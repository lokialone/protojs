// 滚动条滚动到顶部，先快后慢
function smoothScrollToTop() {
    let currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(smoothScroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
    }
}
// 去除string头尾空格
export function trim(str) {
    str = str.replace(/^(\s|\u00A0)+/, '');
    for (var i = str.length - 1; i >= 0; i -= 1) {
        if (/\S/.test(str.charAt(i))) {
            str = str.substring(0, i + 1);
            break;
        }
    }
    return str;
}

// 每四行空一格，
export function bankCardNoTransfer(val) {
    val = trim(val);
    if (/\S{5}/.test(val)) {
        return val.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
    }
    return val;
}

// 把对象push个数组，不是对象不是引用
export function pushObject(arr, obj) {
    if (Array.isArray(arr)) {
        arr.push(JSON.parse(JSON.stringify(obj)));
    } else {
        throw new Error('first parameter is not a array');
    }
}

// isPhoneX
function isIphoneX() {
    return /iphone/gi.test(navigator.userAgent) && (screen.height === 812 && screen.width === 375);
}

// 可中断的遍历
Array.prototype.each = function (callback) {
    if (!callback) return false;
    for (let i = 0, len = this.length; i < len; i++) {
        if (callback(this[i], i) === false) break;
    }
}

