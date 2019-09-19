function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

var fetch = require('node-fetch');
// fetch('http://jsonplaceholder.typicode.com/posts/1')
//     .then( res => res.json() )
//     .then( post => post.title )
//     .then( x => console.log('Title: ',x))


function* generateFn() {
    const response = yield fetch('http://jsonplaceholder.typicode.com/posts/1');
    const post = yield response.json();
    const title = post.title;
    console.log('Title: ',title);
}

function isPromise(obj) {
    
}

function run(generate) {
    let gen = generate();
    // let iteration = gen.next();
    for (let v of gen) {
        console.log(v);
        v.then((res) => {
            gen.next(res);
        })
      }
}
run(generateFn);
// let fn = generateFn();
// let iteration = fn.next();
// console.log(iteration)
// iteration.value.then((x) => {
//     // console.log('x', x.json());
//     let iteration2 = fn.next(x)
//     iteration2.value.then((x2) => {
//         fn.next(x2);
//     })
// })
