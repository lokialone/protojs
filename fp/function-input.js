const _ = require('ramda')
const accounting = require('accounting')
/**
 *练习一， 使接受多个参数的函数变成接受一个参数的函数
 * @param {*} fn
 * @returns
 */
function unary (fn) {
    return (arg) => fn(arg)
}

// console.log(['1', '2', '3'].map(unary(parseInt)))

// before
var filterQs = function(xs) {
    return _.filter(function(x){ return _.match(/q/i, x);  }, xs);
};
// after
var filterQs1 = _.filter((x) =>_.match(/q/i, x))

// console.log(filterQs1('dqa'))

var _keepHighest = function(x,y){ return x >= y ? x : y; };

// 重构这段代码:
var max = function(xs) {
  return _.reduce(function(acc, x){
    return _keepHighest(acc, x);
  }, -Infinity, xs);
};

var max = _.reduce(_keepHighest, -Infinity)

// console.log(max([2,3,9,4]))


// 包裹数组的 `slice` 函数使之成为 curry 函数
// //[1,2,3].slice(0, 2)
var slice = _.curry((start, end, xs) => xs.slice(start, end))
// console.log(slice(1,2)([1,2,3]))

// 借助 `slice` 定义一个 `take` curry 函数，该函数调用后可以取出字符串的前 n 个字符。
var take = slice(0);
// console.log(take(2, [1,2,3]))


var toUpperCase = (x) => x.toUpperCase();
var exclaim = (x) => x + '!';
var shout = _.compose(exclaim, toUpperCase);

// console.log(shout("send in the clowns"));

// 示例数据
var CARS = [
  {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
  {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
  {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
  {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
  {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
  {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
];

// 练习 1:
// ============
// 使用 _.compose() 重写下面这个函数。提示：_.prop() 是 curry 函数
var isLastInStock = function(cars) {
  var last_car = _.last(cars);
  return _.prop('name', last_car);
};

var isLastInStockNew = _.compose(_.prop('name') ,_.last)

// console.log(isLastInStockNew(CARS))


var nameOfFirstCar = _.compose(_.prop('name'), _.head)

// console.log(nameOfFirstCar(CARS))


// 练习 3:
// ============
// 使用帮助函数 _average 重构 averageDollarValue 使之成为一个组合
var _average = function(xs) { return _.reduce(_.add, 0, xs) / xs.length; }; // <- 无须改动

var averageDollarValue = function(cars) {
  var dollar_values = _.map(function(c) { return c.dollar_value; }, cars);
  return _average(dollar_values);
};

var averageDollarValueNew = _.compose(_average, _.map(_.prop('dollar_value')))

// console.log(averageDollarValueNew(CARS))


var trace = _.curry(function(tag, x){
  console.log(tag, x);
  return x;
});

// ============
// 使用 compose 写一个 sanitizeNames() 函数，返回一个下划线连接的小写字符串：例如：sanitizeNames(["Hello World"]) //=> ["hello_world"]。

var _underscore = _.replace(/\W+/g, '_'); //<-- 无须改动，并在 sanitizeNames 中使用它

var sanitizeNames = _.map(_.compose(_underscore, _.toLower));
// console.log(sanitizeNames(["Hello World"]))


// 彩蛋 1:
// ============
// 使用 compose 重构 availablePrices

var availablePrices = function(cars) {
  var available_cars = _.filter(_.prop('in_stock'), cars);
  return available_cars.map(function(x){
    return accounting.formatMoney(x.dollar_value);
  }).join(', ');
};

availablePricesNew = _.compose(_.join(', '), _.map(_.compose(accounting.formatMoney, _.prop('dollar_value'))), _.filter(_.prop('in_stock')))
// console.log(availablePrices(CARS));
// console.log(availablePricesNew(CARS));


// ============
// 重构使之成为 pointfree 函数。提示：可以使用 _.flip()
var fastestCar = function(cars) {
  var sorted = _.sortBy(function(car){ return car.horsepower }, cars);
  var fastest = _.last(sorted);
  return fastest.name + ' is the fastest';
};
var add = function (a) {
  return a + ' is the fastest'
}

var append = _.flip(_.concat)
var fasterCarNew = _.compose(append(' is the fastest'), _.prop('name'), _.last,_.sortBy(_.prop('horsepower')))

console.log(fasterCarNew(CARS))


