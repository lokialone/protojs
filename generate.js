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
    const data = yield fetch('http://jsonplaceholder.typicode.com/posts/1');
    const post2 = yield data.json();
    const number = yield 2;
    console.log('Title2: ', number ,  post2.title);
}


function run(generate) {
    let gen = generate();
    function next(res = null) {
        let itration = gen.next(res);
        if (!itration.done) {
            if (itration.value.then) {
                itration.value.then((res) => {
                    next(res);
                });
            } else {
                next(itration.value);
            } 
        }
    }
    next();
}
run(generateFn);