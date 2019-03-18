/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

class List {
    constructor(val) {
        let node =new ListNode(val)
        this.root = node
        this.currentNode = node
    }
    add (val) {
        let node =  new ListNode(val);
        this.currentNode.next = node;
        this.currentNode = node;
    }
    _print (node) {
        console.log(node.val)
        if (node.next) {
            this._print(node.next)
        }
    }
    print() {
        if (!this.root.next) {
            console.log('null')
            return
        } 
        this._print(this.root)
    }

    _delete(node, val) {
        if (!node || !node.next) return 
        if (node.next.val === val) {
            node.next = node.next.next;
        }
        this._delete(node.next)

    }

    delete(val) {
        if (this.root.val === val) {
            this.root = {}
            return
        }
        this._delete(this.root, val)
    }
}

let a = new List('a');
a.add(2);
a.add(3);
a.add(3);
a.print()
a.delete(2)
a.delete(3)
a.delete('a')
a.print()


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
};