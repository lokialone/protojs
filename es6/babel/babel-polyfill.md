
很多人相信也有相同的疑问，在什么情况下我可以安全的使用 Array.from()、什么情况下我可以放心大胆的使用 [ ].filter()、在老版本的 IE 里面可以使用 Map、Set 吗？



Babel 处于构建时（也就是传统Java等语言的编译时），转译出来的结果在默认情况下并不包括 ES6 对运行时的扩展，例如，builtins（内建，包括 Promise、Set、Map 等）、内建类型上的原型扩展（如 ES6 对 Array、Object、String 等内建类型原型上的扩展）以及Regenerator（用于generators / yield）等都不包括在内。

那么大伙儿常说的 Babel polyfill 和我说的运行时扩展分别是什么呢？



## core-js 标准库

这是所有 Babel polyfill 方案都需要依赖的开源库zloirock/core-js，它提供了 ES5、ES6 的 polyfills，包括 promises 、symbols、collections、iterators、typed arrays、ECMAScript 7+ proposals、setImmediate 等等。

如果使用了 babel-runtime、babel-plugin-transform-runtime 或者 babel-polyfill，你就可以间接的引入了 core-js 标准库。



## regenerator 运行时库

这是 Facebook 提供的 facebook/regenerator 库，用来实现 ES6/ES7 中 generators、yield、async 及 await 等相关的 polyfills。在下面即将提到的 babel-runtime 中被引用。有些初学者遇到的“regeneratorRuntime is not defined”就是因为只在 preset 中配置了 stage-0 却忘记加上 babel-polyfill。

如果使用了 babel-runtime、babel-plugin-transform-runtime 或者 babel-polyfill，你就可以间接的引入了 regenerator-runtime 运行时库（非必选）。



## babel-runtime 库

babel-runtime 是由 Babel 提供的 polyfill 库，它本身就是由 core-js 与 regenerator-runtime 库组成，除了做简单的合并与映射外，并没有做任何额外的加工。

所以在使用时，你需要自己去 require，举一个例子，如果你想使用 Promise，你必须在每一处需要用到 Promise 的 module 里，手工引入 promise 模块：

const Promise = require('babel-runtime/core-js/promise');
由于这种方式十分繁琐，事实上严谨的使用还要配合 interopRequireDefault() 方法使用，所以 Babel 提供了一个插件，即 babel-plugin-transform-runtime。



## babel-plugin-transform-runtime 插件

这个插件让 Babel 发现代码中使用到 Symbol、Promise、Map 等新类型时，自动且按需进行 polyfill，因为是“自动”所以非常受大家的欢迎。

在官网中，Babel 提醒大家如果正在开发一个 library 的话，建议使用这种方案，因为没有全局变量和 prototype 污染。

全局变量污染，是指 babel-plugin-transform-runtime 插件会帮你实现一个沙盒（sandbox），虽然你的 ES6 源代码显式的使用了看似全局的 Promise、Symbol，但是在沙盒模式下，Babel 会将它们转译成：

ES6 代码

const sym = Symbol();

const promise = new Promise();

console.log(arr[Symbol.iterator]());


转译后的代码

"use strict";

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _symbol = require("babel-runtime/core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sym = (0, _symbol2.default)();

var promise = new _promise2.default();

console.log((0, _getIterator3.default)(arr));
你会发现，这个插件至始至终没有在 Global 对象下挂在全局的 Symbol 和 Promise 变量。这样一来，如果你引入的其他类库使用了 bluebird 之类的第三方 polyfill 也不会受此影响。

那么什么是 prototype 污染呢，这就要说到 ES6 的 Array、String 等内建类型扩展了很多新方法，如 Array 原型上的 includes()、filter() 等新方法，babel-plugin-transform-runtime 插件是不会进行扩展修改的，很多人往往忽略了这一点。要区分的是，Array.from 等静态方法（也有人称类方法）还是会被插件 polyfill 的。

因此，babel-plugin-transform-runtime 这个插件更适合于开发类库（library）时去使用，而不适合直接用在独立的前端工程中。另外，它可以按需polyfill，所以从一定程度上控制了polyfill 文件的大小。



## babel-polyfill

最后来到 babel-polyfill，它的初衷是模拟（emulate）一整套 ES2015+ 运行时环境，所以它的确会以全局变量的形式 polyfill Map、Set、Promise 之类的类型，也的确会以类似 Array.prototype.includes() 的方式去注入污染原型，这也是官网中提到最适合应用级开发的 polyfill，再次提醒如果你在开发 library 的话，不推荐使用（或者说绝对不要使用）。

不同于插件，你所要做的事情很简单，就是将 babel-polyfill 一次性的引入到你的工程中，通常是和其他的第三方类库（如 jQuery、React 等）一同打包在 vendor.js 中即可。在你写程序的时候，你完全不会感知 babel-polyfill 的存在，如果你的浏览器已经支持 Promise，它会优先使用 native 的 Promise，如果没有的话，则会采用 polyfill 的版本（这个行为与 babel-plugin-transform-runtime 一致），在使用 babel-polyfill 后，你不需要引入 babel-plugin-transform-runtime 插件和其他依赖的类库。它的缺点也显而易见，那就是占文件空间并且无法按需定制。



## 总结

最后比较一下最容易混淆的 babel-polyfill 与 babel-plugin-transform-runtime：

1.babel-polyfill：需要在你自己的代码中手工引入（最好放在 vendor 里），它会以全局变量污染的方式 polyfill 内建类（如 Map、Set、Promise 等），同时也会通过修改 Array、String、Object 等原型的方式添加实例方法（如 Array.prototype.includes()、String.prototype.padStart() 等），内建类的静态方法（如 Array.from() 等）也会被 polyfill。babel-polyfill 适合于开发独立的业务应用，及时全局污染、prototype 被修改也不会受到太大的影响，babel-polyfill 不适合开发第三方类库。

2.babel-plugin-transform-runtime：需要你在 .babelrc 或 Babel 编译选项中将该插件添加到 plugins 中，插件只会 polyfill 你用到的类或方法，由于采用了沙盒（Sandbox）机制，它不会污染全局变量，同时也不会去修改内建类的原型，带来的坏处是它不会 polyfill 原型上的扩展（例如 Array.prototype.includes() 不会被 polyfill，Array.from() 则会被 polyfill）。插件的方式适合于开发第三方类库，不适合开发需要大量使用 Array 等原型链扩展方法的应用。

3.lodash 来替代绝大多数的 prototype 的扩展。


https://zhuanlan.zhihu.com/p/29058936

