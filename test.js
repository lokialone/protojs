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

let arr = [1, 3, 4]
let obj = { 'name': 1, 'name2': 2 }

for (let key in arr)
  console.log(key, arr[key]);

for (let key in obj)
  console.log(key, obj[key]);