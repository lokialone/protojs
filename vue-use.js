window.onload = function () {
    var vm = new Vue({
        el: '#app',
        data: {
            message: 'title'
        }
    });

    new Vue({
        el: '#test',
        data: {
            world: 'worldddddd!'
        }
    })
}