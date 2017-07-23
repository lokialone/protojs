function towerBuilder(num) {
  var arr = [];
  var max = num * 2 - 1;
  for (var i = 0; i < num; i++) {
    var star = i * 2 + 1;
    arr[i] = '*'.repeat(star).padStart((max - star) / 2 + star).padEnd(max);
  }
  console.log(arr);
}
towerBuilder(6);
