require('./support')
const _ = require('ramda')
var Task = require('data.task');
log = console.log
// 练习 1
// ==========
// 使用 _.add(x,y) 和 _.map(f,x) 创建一个能让 functor 里的值增加的函数

var ex1 = _.map(_.add(1))


//练习 2
// ==========
// 使用 _.head 获取列表的第一个元素
var xs = Identity.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);

var ex2 = _.map(_.head)
// console.log(ex2(xs))


// 练习 3
// ==========
// 使用 safeProp 和 _.head 找到 user 的名字的首字母
var safeProp = _.curry(function (x, o) { return Maybe.of(o[x]); });

var user = { id: 2, name: "Albert" };

var ex3 = _.compose(_.map(_.head), safeProp('name'))
// console.log(ex3(user))


// 练习 4
// ==========
// 使用 Maybe 重写 ex4，不要有 if 语句

var ex4 = function (n) {
    if (n) { return parseInt(n); }
};

var ex4New = function (n) {
    return Maybe.of(n).map(parseInt)
}

var ex4A = _.compose(_.map(parseInt), Maybe.of);
  
// var ex4 = undefined

// console.log(ex4A('sfsaf'))

// 练习 5
// ==========
// 写一个函数，先 getPost 获取一篇文章，然后 toUpperCase 让这片文章标题变为大写

// getPost :: Int -> Future({id: Int, title: String})
var getPost = function (i) {
    return new Task(function(rej, res) {
      setTimeout(function(){
        res({id: i, title: 'Love them futures'})
      }, 300)
    });
  }
  
  const a =  _.compose(_.toUpper, _.prop('title'))
//   getPost('dddd').fork(
//     (error) => {
//         console.log(error)
//     },
//     (res) => {
      
//        console.log(a(res))
//     }
//   )
   var ex5 = _.compose(_.map(a), getPost)
//    ex5('ddd').fork((error) => {
//         console.log(error)
//    },
//    (res) => {
//         console.log(res)
//    })


   // 练习 6
// ==========
// 写一个函数，使用 checkActive() 和 showWelcome() 分别允许访问或返回错误

var showWelcome = _.compose(_.add( "Welcome "), _.prop('name'))

var checkActive = function(user) {
 return user.active ? Right.of(user) : Left.of('Your account is not active')
}
// 答案就是这个，是真的跑不通
var ex6 = _.compose(_.map(showWelcome), checkActive)


// 练习 7
// ==========
// 写一个验证函数，检查参数是否 length > 3。如果是就返回 Right(x)，否则就返回
// Left("You need > 3")

var ex7 = function(x) {
    // const check = function (v) {
    //     return v.length > 3 ? Right.of(v) : Left.of('you need > 3')
    // }
    return x.length > 3 ? Right.of(x) : Left.of('you need > 3')
}

// console.log(ex7('ddddd'))


// 练习 8
// ==========
// 使用练习 7 的 ex7 和 Either 构造一个 functor，如果一个 user 合法就保存它，否则
// 返回错误消息。别忘了 either 的两个参数必须返回同一类型的数据。

var save = function(x){
    return new IO(function(){
      console.log("SAVED USER!");
      return x + '-saved';
    });
  }
  
//   var ex8 = _.compose(_.map(either(console.log, save), ex7))

  var ex8 = _.compose(either(IO.of, save), ex7)
//   console.log(ex8('ddddd').map((x) => console.log(x)))


var fs = require('fs');

//  readFile :: String -> IO String
var readFile = function(filename) {
  return new IO(function() {
    return fs.readFileSync(filename, 'utf-8');
  });
};

//  print :: String -> IO String
var print = function(x) {
  return new IO(function() {
    console.log(x);
    return x;
  });
}

//  cat :: IO (IO String)
var cat = _.compose(_.map(print), readFile);
var catFirstChar = _.compose(_.map(_.map(_.head)), cat);
log(cat("./function-input").unsafePerformIO)
log(catFirstChar("./function-input"))


var mmo = Maybe.of(Maybe.of("nunchucks"));
// Maybe(Maybe("nunchucks"))
mmo.join()