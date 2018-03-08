## js引用
let obj = {fool:3};
let arr = [obj];
obj = null;
arr // [{fool: 3}]  ????引用改了，值不应该也修改么？？。
arr[0]有一个{foo:3}的引用，obj = null，是obj消除对{foo：3}的引用，{foo:3}还是存在。

## weakset
