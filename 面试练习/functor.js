const _ = require('ramda');
let IO = function(f) {
    this.__value = f;
}
  
IO.of = function(x) {
    return new IO(function() {
      return x;
    });
  }
  
IO.prototype.map = function(f) {
    return new IO(_.compose(f, this.__value));
}

IO.prototype.join = function() {
    return this.unsafePerformIO();
}

IO.prototype.chain = function(f) { return this.map(f).join(); }

let Maybe = function(x) {
    this.__value = x;
}
  
Maybe.of = function(x) {
    return new Maybe(x);
}
  
Maybe.prototype.isNothing = function() {
    return (this.__value === null || this.__value === undefined);
}
  
Maybe.prototype.join = function() {
    return this.isNothing() ? Maybe.of(null) : this.__value;
}

Maybe.prototype.map = function(f) {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
}

Maybe.prototype.chain = function(f) { return this.map(f).join(); }

module.exports = {
    IO,
    Maybe
};