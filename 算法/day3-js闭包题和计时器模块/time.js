window.onload = function(){
function CountDown(time) {
	this.time = time;
	this.origin_time = new Date().getTime();
	this.day = '';
	this.hour = '';
	this.minute = '';
	this.second = '';
}

CountDown.prototype.calcuTime = function() {
	this.day = Math.floor(this.time / (60 * 60 * 24));	
	this.hour = Math.floor((this.time - this.day * 60 * 60 * 24) / (60 * 60));
	this.minute = Math.floor((this.time - this.day * 60 * 60 * 24 - this.hour * 60 * 60) / 60);
	this.second = this.time -this.day * 60 * 60 * 24 - this.hour * 60 * 60 - this.minute * 60;
}

CountDown.prototype.getTime = function() {
	this.calcuTime();
	return this.day+'天'+this.hour+'小时'+this.minute+'分钟'+this.second+'秒';
}

/**
 * 每1s update tiem
 * @return {[type]} [description]
 */
// CountDown.prototype.update = function() {
// 	var current_time = new Date();
// 	var diffrence = current_time - this.origin_time;
// 	if(diffrence >= 1000){
// 		this.time--;
// 		this.origin_time = current_time;	
// 	}
// }

CountDown.prototype.update = function(){
	this.time--;
}

CountDown.prototype.renderTime = function(id) {
	this.update();
	var time = this.getTime();
	document.getElementById(id).innerHTML= time;	
}

Function.prototype.bind = function(context){
	var _self = this;
	return function(){
		return _self.apply(context,arguments);
	}
}

var obj = {
	name: 'lokialone'
}

var func = function(){
	alert(this.name);
}.bind(obj);
func();
CountDown.prototype.run = function(id){
	

	var timer = setInterval(function(){
		if(this.time > 0 ){
			this.renderTime(id);
		}else{
			clearInterval(timer);
		}
	}.bind(this),1000);
	// if(this.time >= 0){
	// 	setTimeout(function(){
	// 		_self.renderTime(id);
	// 		_self.run(id);
	// 	},200);
	// }	
}

function getProduct(temp){

	if(!temp){
		return false;
	}

	var product = 1;
	for(var i = 0;i < temp.length; i++){
		product = product *temp[i]; 
	}
	return product;
}

var div =  document.createElement('div'),
 	p = document.createElement('p'),
	span_text = document.createTextNode('倒计时:还剩下'),
	time_container = document.getElementById('time');

p.appendChild(span_text);
div.appendChild(p);
time_container.appendChild(div);
var time_span = document.createElement('span');
time_span.setAttribute('id','time_span');
p.appendChild(time_span);

var countDown = new CountDown(130000);
countDown.run('time_span');




}
