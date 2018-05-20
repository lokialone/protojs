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


export function getWindowHeight() {
    return document.documentElement.offsetHeight || document.body.offsetHeight;
}

export function getClientHeight() {
    return document.documentElement.clientHeight || document.body.clientHeight;
}

//暂时只做了99以内的数组转化
// 将数字转换成中文数字
export function cNumberTranfer(number) {
    const NUMBER = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    let num = parseInt(number);
    let nums = num.toString().split('');
    if (num < 10) {
        return NUMBER[num - 1];
    }

    if (num < 20) {
        return `十${NUMBER[nums[1] - 1]}`;
    }
    if (nums[1] === '0') {
        return `${NUMBER[nums[0] - 1]}十`;
    }
    return `${NUMBER[nums[0] - 1]}十${NUMBER[nums[1] - 1]}`;
}

// 图片上传，pc端可用，移动端无法使用
export function fileUpload() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.click();
    return new Promise((resolve, reject) => {
        function handleFiles() {
            console.log('input', input.files);
            if (!input.files.length) return;
            let file = input.files[0];
            return imageUpload(file).then((res) => {
                resolve(res.data.path);
            }).catch((err) => {
                reject(err);
            });

        }
        input.onchange = () => {
            handleFiles();
        };

        input.addEventListener('change', handleFiles, false);
    });
}
//手机号验证
export function validatePhone(phone) {
    // 手机号格式：1开头的11位数
    if (phone && phone.length && /^1\d{10}$/.test(phone)) return true;
    return false;
}

// 获取传入的月份有几天
export function getDaysInOneMonth(year, month) {
    month = parseInt(month, 10);
    var d = new Date(year, month, 0);
    return d.getDate();
}

