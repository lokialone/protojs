 
// 自存档对象 记录操作记录
function Archiver() {
    var temperature = null;
    var archive = [];
  
    Object.defineProperty(this, 'temperature', {
      get: function() {
        console.log('get!');
        return temperature;
      },
      set: function(value) {
        temperature = value;
        archive.push({ val: temperature });
      }
    });
  
    this.getArchive = function() { return archive; };
  }
  
  var arc = new Archiver();
  arc.temperature; // 'get!'
  arc.temperature = 11;
  arc.temperature = 13;
  console.log(arc.getArchive()); 