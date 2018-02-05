export function downloadFile(url, name) {
    // 修复firefox无法点击下载
    HTMLElement.prototype.click = function() {
        var evt = this.ownerDocument.createEvent('MouseEvents');
        evt.initMouseEvent('click', true, true, this.ownerDocument.defaultView, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
        this.dispatchEvent(evt);
    };
    var a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();
}