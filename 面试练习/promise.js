function Promise(f,pause) { 
  var t=this;
  this.f=f;
  console.log('f', f);
  this.thens=[];
  this.resolve=function(g) {
    console.log('g', g)
    for(var i=0;i<t.thens.length;i++)
    {// try/catch to be used later for dealing with exceptions

      try
      {
          t.thens[i].f(g);
          t.thens[i].resolve();
      }   
      catch(ex)
      {}

      }
  };  

  // to be implemented later
  this.reject=function(g) {};

  this.then=function(resolve,reject) {
      // i'm passing true for pause argument as we dont need to execute promise code just yet
      var nextPromise=new Promise(resolve,true);

      this.thens.push(nextPromise);

      return nextPromise;
  }
  if(!pause) {
    this.f(this.resolve,this.reject); 
  }
}


var aaa= new Promise(function(resolve,reject) {
  setTimeout(function() {
      resolve("good");
  },2000);
});

aaa.then(function(res) {
  console.log("ccc");
  console.log(res);
})
// .then(function(res) {
//   console.log("ddd");
//   console.log(res);
// },function(rej) {
//   console.log("eee");
//   console.log(rej);
// });