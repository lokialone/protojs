window.onload = function () {

    // Vue.component('my-component', {
    //     template: '<div>A custom component!</div>'
    // });
    var Child = {
        template: '<div>A custom component!</div>',
    }
    var vm1 = new Vue({
        template: '<my-component> </my-component>',
        data: {
            message: 'title'
        },
        components: {
            'my-component': Child
        }
    });
  
    vm1.$mount('#app');

    var vm2 = new Vue({
        el: '#test',
        data: {
            world: 'worldddddd!'
        }
    });

    var test = Vue.extend({
        template: '<div>A test component!</div>',
    });
    var vm = new test().$mount('#test2');
    console.log(vm);
    
    



   

  
   

}