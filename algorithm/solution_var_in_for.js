for(var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 0);
}

for(let j = 0; j < 10; j++) {
    setTimeout(() => {
        console.log(j)
    }, 0);
}

for(var i = 0; i < 10; i++) {
    (function(i){
        setTimeout(() => {
            console.log('new', i)
        }, 0);
    })(i)
}

for(var i = 0; i < 10; i++) {
    try {
        throw i
    } catch(e) {
        setTimeout(() => {
            console.log('new', e)
        }, 0);
    }
}