export function getEnvInfoFromUserAgent () {
    let os = '';
    let ua = window.navigator.userAgent;
    /**
     * 系统类型 ios 、 android 、 pc
     */
    let iosRe = /iPad|iPhone|iPod/i;
    let androidRe = /Android/i;

    if (iosRe.test(ua)) {
        os = 'ios';
    } else if (androidRe.test(ua)) {
        os = 'android';
    }
    return os;
}


export default getEnvInfoFromUserAgent;