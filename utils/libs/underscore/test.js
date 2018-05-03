var _ = {};
    // Is a given variable an object?
_.isObject = function(obj) {
var type = typeof obj;
return type === 'function' || type === 'object' && !!obj;
};

var Ctor = function() {};
var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    // Object
    if (Object.create) return Object.create(prototype);
    // 没有Object.create 便自己create
    // new 这个操作本质上应该是使被new的对象的prototype指向该new的对象, 并为属性开辟内存
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
}

_.create = function(prototype, props) {
    var result = baseCreate(prototype);
    // if (props) _.extendOwn(result, props);
    return result;
  };


var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      console.log(arguments);
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        console.log('source', source);
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };
// 多数assign,extend, 都为浅拷贝
  _.assign = createAssigner(_.keys)
  let a = {age: 50, nickName: 'test', dd: {dddd: ''}}
  let test = _.assign({name: 'moe'}, a);
  console.log('before', test);
  a.dd.name = 'dddd';
  console.log('after', test);
