function Subject() {
    this.observers = [];
}

Subject.prototype.notify = function(msg) {
    this.observers.forEach(obj => {
        obj.update(msg);
    });
}

Subject.prototype.subscribe = function(obj) {
    this.observers.push(obj)
}

function Observer(id) {
    this.id = id
}

Observer.prototype.update = function(msg) {
    console.log(this.id +msg)
}

let ob1 = new Observer('1');
let ob2 = new Observer('2');
let sub = new Subject();
sub.subscribe(ob1);
sub.subscribe(ob2);
sub.notify('hell');
sub.notify('helddddl');