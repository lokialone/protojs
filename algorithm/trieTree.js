//字典树 trie树
//实例有n个单词，记录所有单词出现的频率
//实现插入树
//todo 树的搜索
var util = require('util');
var log = function(msg) {
	console.log(util.inspect(msg, false, null,true))
}
let arr = [
        'number', 'init','number', 'ins',
        'out', 'add', 'addition', 'include',
        'abstract', 'alias', 'actions', 'actions',
        'include','outerHeight', 'out', 'init'];

// trie如何统计重复的单词
class trieNode {
	constructor(v) {
		this.value = v
		this.end = false
		this.time = 1
	}
}
class Trie {

	constructor() {
		this.root = {}
	}

	_insert(root, str) {
		let v = str[0]
		str = str.slice(1)
		!root[v] ? root[v] = new trieNode(v) : null
		str ? this._insert(root[v], str): repeatWord()

		function repeatWord() {
			root[v].end ? root[v].time++ : root[v].end = true
		}
	}

	insert(str) {
		if (typeof str !== 'string' || !str || !str.length) {
			console.log('无效数据不进行插入')
			return
		}
		this._insert(this.root, str)
	}
}

let tree1 = new Trie()
tree1.insert('hello')
tree1.insert('he')
tree1.insert('he')
log(tree1);