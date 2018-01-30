var o1 = {};//字面量的表现形式
var o2 = new Object;
var o3 = new Object();
var o4 = new Object(null);
var o5 = new Object(undefined);
var o6 = Object.create(Object.prototype);//等价于 var o = {};//即以 Object.prototype 对象为一个原型模板,新建一个以这个原型模板为原型的对象
//区别
var o7 = Object.create(null);//创建一个原型为 null 的对象

console.log(o1);
console.log(o2);
console.log(o3);
console.log(o4);
console.log(o5);
console.log(o6);
console.log(o7);

/**
 * 工厂模式创建对象
 * 缺点在于函数不共享,都需要单独开辟内存
 */
function Fruit(){
	var o1 = new Object;
	var age = 13;
	o1.name = "lokia";
	o1.getAge = function(){
		return age;
	}
	return o1;
}

var fruit = new Fruit();
console.log(fruit.name);
console.log(fruit.getAge());

// 原型链继承fruit
var apple ={
	title: 'apple',
	sayHello: function(){
			console.log('apple');	
			alert('sss');
		}
}

// apple = Object.create(Fruit);
var banana = new Fruit();
// apple = new Fruit();
console.log(banana.name);
console.log(apple);
// console.log(apple.name);
console.log(apple.sayHello());//undefined

/**
 * 构造器加原始模式创建对象
 * 单纯的构造器模式函数无法共享，单纯的原型模式每个实例化得对象变量都不完全属于对方，其他实例改变变量时，所有的变量都改变
 */
function Animal(){
	this.name = 'Animal';
	this.setName = function(name){
		this.name = name;
	}
}

Animal.prototype.run = function() {
	console.log('I am runnig');
}

function Dog(){
	Animal.apply(this);//获得构造器里的属性和方法，使Dog函数拥有这些属性，不单单是能使用
}
Dog.prototype = new Animal();//获得animal函数上prototype上的函数

var dog = new Dog();
console.log(dog.name);
console.log(dog);
dog.setName('dog');
console.log(dog.name);
dog.run();

/**
 * 动态原型模式，函数内部控制方法只实例一次，也算可以使用，然而感觉麻烦- -
 */
function Cat(){
	this.name = 'Cat';
	// / 这段代码只执行了一次
	if(typeof this.say !== 'function'){
		Cat.prototype.say = function(){
			console.log('Meow');
		}
	}
}

var cat = new Cat();
cat.say();





