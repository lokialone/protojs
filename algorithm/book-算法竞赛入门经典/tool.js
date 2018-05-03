Array.prototype.each = function(fn) {
    if (!fn) return false;
    for(let i = 0, len = this.length; i < len; i++) {
        if (fn(this[i], i) === false) return false;
    }
}