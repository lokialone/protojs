// diff 函数，对比两棵树
function diff (oldTree, newTree) {
    var index = 0 // 当前节点的标志
    var patches = {} // 用来记录每个节点差异的对象
    dfsWalk(oldTree, newTree, index, patches)
    return patches
}

function dfsWalk(oldTree, newTree, index, patches) {

}


