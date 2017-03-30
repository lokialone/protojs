//use es6 string repeat and padStart can get over easily.by myself
function towerBuilder(num) {
  var arr = [];
  var max = num * 2 -1;
  for (var i = 0; i < num; i++) {
    var star = (i * 2) + 1;
    arr[i] = '*'.repeat(star).padStart((max - star) / 2 + star).padEnd(max);
  }
  console.log(arr);
}
towerBuilder(6);

function towerBuilder2(num) {
  var arr = [];
  var max = num * 2 -1;
  for (var i = 0; i < num; i++) {
    var starNum = (i * 2) + 1;
    var halfBlankNum = (max - starNum) / 2;
    var starStr = '';
    var blankStr = '';
    for(var x = 0; x < starNum; x++) {
      starStr += '*';
    }
    for(var y = 0; y < halfBlankNum; y++){
      blankStr += ' ';
    }
    arr[i] = blankStr + starStr + blankStr;
  }
  console.log(arr);
}

towerBuilder2(6)

// other's good one
function towerBuilder3(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}
console.log(towerBuilder3(6));
