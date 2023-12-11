function inThread(p, pre) { // p: ThreadTree, pre: ThreadTree
    if (p != null) {
        inThread(p.lchild, pre)
        if (p.lchild == null) { // 左子树为空，建立前驱线索
            p.lchild = pre
            p.ltag = 1
        }
        if (pre != null && p.rchild == null) { // 前驱结点右子树为空，建立前驱结点的后继线索
            pre.rchild = p
            pre.rtag = 1
        }
        pre = p
        inThread(p.rchild, pre)
    }
}

function createInThread(p) { // p: ThreadTree
    let pre: any = null
    if (p != null) { // 二叉树非空
        inThread(p, pre) // 中序线索化二叉树
        pre.rchild = null // 处理遍历的最后一个结点
        pre.rtag = 1
    }
}

// 求中序线索二叉树中，中序序列的第一个结点
function firstNode(p) {
    while (p.ltag == 0) p = p.lchild // 最左边结点
    return p
}

// 求中序线索二叉树中结点p在中序序列下的后继
function nextNode(p) {
    if (p.rtag == 0) return firstNode(p.rchild)
    return p.rchild
}

// 中序线索二叉树的中序遍历算法
function inOrder(t) {
    let p = null
    for (p = firstNode(t); p != null; p = nextNode(p)) console.log(p)
}