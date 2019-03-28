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
    head() {
        return this.root;
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

let a = new List('1');
a.add(2);
a.add(3);
a.add(4);

// 双指针法
var removeNthFromEnd = function(head, n) {
    let pre = head;
    let current = head;

    while(n > 0) {
        if (!current) return
        current = current.next 
        n--
    }
    
    if (!current) {
        if (!head.next) return
        head = head.next;
        return head;

    } else {
        while (current.next) {
            pre = pre.next;
            current = current.next;
        }
        pre.next = pre.next.next;
    }
    return head;
};

// console.log(removeNthFromEnd(a.head(), 2));

let removeNthFromEnd2 = function(head, n) {
    return removeNthFromEndHelper(head, n, 0) === n ? head.next : head;
};

let removeNthFromEndHelper = function(head, n, count) {
    if (head.next !== null) {
        count = removeNthFromEndHelper(head.next, n, count);
    }
    if (count === n) {
        head.next = head.next.next;
    }
    return ++count;
};


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
// self scheme reverse的方法，尾递归。
var reverseList = function(head) {
    if (!head || !head.next) return;
    res = new ListNode(head.val);
    return reverseIter(head.next, res)
};

var reverseIter = function(head, res) {
    if(head === null) {
        return res;
    }
    let newNode = new ListNode(head.val);
    newNode.next = res;
    return reverseIter(head.next, newNode)
}

var reverseList2 = function(head) {
    var cur = head;
    var pre = null;
    while(cur){
        var originNextNode = cur.next;
        cur.next = pre;
        pre = cur;
        cur = originNextNode;
    }
    return pre;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let m  = l1, n = l2;
    if (l1.val > l2.val) {
        m = l2;
        n = l1;
    }
    let l = m
    while(m.next && n.next) {
        if (m.next.val > n.next.val) {
            l.next = n.next;
        }
    }
};

var reverseList3 = function (head) {
    
}