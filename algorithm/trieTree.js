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
		// this.end = false
		this.time = 0
	}
}
class Trie {

	constructor() {
		this.root = {}
	}

	_insert(root, str) {
		let { head, sup } = this._getHeadAndSup(str)
		!root[head] ? root[head] = new trieNode(head) : null
		sup ? this._insert(root[head], sup): root[head].time++
	}

	_getHeadAndSup(str) {
		return {
			head: str[0],
			sup: str.slice(1)
		}
	}

	insert(str) {
		if (typeof str !== 'string' || !str || !str.length) {
			console.log('无效数据不进行插入')
			return
		}
		this._insert(this.root, str)
	}

	search(str) {
		if (typeof str !== 'string' || !str || !str.length) {
			console.log('无效数据不进行插入')
			return 0
		}
		return this._search(this.root, str)
	}

	_search(root, str) {
		let { head, sup } = this._getHeadAndSup(str)
		if (root[head]) {
			if (sup === '') return root[head].time
			return this._search(root[head], sup)
		} else {
			return 0
		}
	}
}

let tree1 = new Trie()
arr.forEach((item) => {
	tree1.insert(item)
})

arr.forEach((item) => {
	log(tree1.search(item))
})

