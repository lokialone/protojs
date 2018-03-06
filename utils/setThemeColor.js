const themeColor = {
    'cheniu': '#ff4040',
    'dfc': '#FF571A'
};
//根据app 设置theme
function setTheme() {
    let app = getEnvInfoFromUserAgent();
    if (!app) return '';
    let cssStr = `.theme-bg{ background:${themeColor[app]} !important} .theme-color{color: ${themeColor[app]} !important};`;
    return cssStr;
}

//添加css到页面
export function addThemeStyleToHtml(cssStr) {
    let style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
    if (style.styleSheet) {
        style.styleSheet.cssText = cssStr;       //ie下要通过 styleSheet.cssText写入.
    } else {
        style.innerHTML = cssStr;       //在ff中， innerHTML是可读写的，但在ie中，它是只读的.
    }
}

export function setThemeStyle() {
    let cssStr = setTheme();
    addThemeStyleToHtml(cssStr);
}