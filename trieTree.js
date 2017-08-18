//字典树 trie树

//实例有n个单词，记录所有单词出现的频率

//实现插入树
let arr = [
        'number', 'init','number', 'ins',
        'out', 'add', 'addition', 'include',
        'abstract', 'alias', 'actions', 'actions',
        'include','outerHeight', 'out', 'init'];

let root = {};
arr.forEach(item => {
    insertString(root, item);
});

function insertString(root, strs) {
	if (strs.length == 0) {
		return;
	}
	let first = strs[0];
	if (!root.hasOwnProperty(first)) {
		root[first] = {};
	}
	insertString(root[first], strs.slice(1));
}

console.log(root);