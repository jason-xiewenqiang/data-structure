/**
 * 树： 是一种分层数据的抽象模型
 * ① 位于树顶部的节点是根节点
 * ② 至少有有一个子节点的节点称为内部节点
 * ③ 没有子元素的节点称为外部节点
 * ④ 节点深度 节点的深度取决于他祖先节点的数量
 * 实现二叉树： 二叉树中的节点最多有两个节点
 * 二叉搜索树：他只允许在你节点左侧存储（相对父节点）小的值 在右侧存储（相对父节点）大的值
 */

function BinarySearchTree() {
    var Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    var root = null; // 声明根元素
    this.insert = function(key) {
        var node = new Node(key);
        if (root === null) {
            root = node;
        } else {
            insertNode(root, node)
        }
    }

    var insertNode = function(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            }else {
                insertNode(node.right, newNode)
            }
        }
    }
    
    // 中序遍历 是一种以上行顺序访问BST所有节点的遍历方式
    // 也就是从小到大访问所有的节点 
    // 其中的一个应用是对树进行排序
    // 使用的模式是访问者模式  -- 关于访问者模式需要学习
    this.inOrderTraverse = function(callback) {
        inOrderTraverseNode(root, callback)
    }
    var inOrderTraverseNode = function(node, callback) {
        if (node!== null) {
            inOrderTraverseNode(node.left, callback)
            callback(node.key)
            inOrderTraverseNode(node.right, callback)
        }
    }

    // 先序遍历 以优先于后代节点的顺序访问每一个节点
    // 应用：打印一个结构化的文档
    this.preOrderTraverse = function(callback) {
        preOrderTraverseNode(root, callback)
    }
    var preOrderTraverseNode = function(node, callback) {
        if (node!== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback)
            preOrderTraverseNode(node.right, callback)
        }
    }
    // 后序遍历
    this.postOrderTraverse = function(callback) {
        postOrderTraverseNode(root, callback)
    }
    var postOrderTraverseNode = function(node, callback) {
        if (node!==null) {
            postOrderTraverseNode(node.left, callback)
            postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    } 
    // 搜索最小的值
    this.min = function() {
        return minNode(root)
    }
    var minNode = function(node) {
        if (node) {
            while(node && node.left !== null) {
                node = node.left
            }
            return node.key
        }
        return null
    }
    // 最大值
    this.max = function() {
        return maxNode(root)
    }
    var maxNode = function(node) {
        if (node) {
            while(node && node.right !== null) {
                node = node.right
            }
            return node.key
        }
        return null
    }
    // 搜索是否存在特定的值
    this.search = function(key) {
        return searchNode(root, key)
    }
    var searchNode = function(node, key) {
        if (node === null) {
            return false
        }
        if (key < node.key) {
            return searchNode(node.left, key)
        } else if (key > node.key) {
            return searchNode(node.right, key)
        } else {
            return true
        }
    }

    this.remove = function(key) {
        root = removeNode(root, key)
    }

    var removeNode = function(node, key) {
        if (node === null) {
            return null
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key)
            return node
        } else if (key > node.key) {
            node.right = removeNode(node.right, key)
            return node
        } else { // 相等
            // 第一种情况 只有一个叶节点
            if (node.left === null && node.right === null) {
                node = null
                return node
            } 

            // 第二种情况 有一个子节点的节点
            if (node.left === null) {
                node = node.right
                return node
            } else if (node.right === null) {
                node = node.left
                return node
            }
            // 第三种情况 有两个子节点的节点
            var aux = findMinNode(node.right)
            node.key = aux.key
            node.right = removeNode(node.right, aux.key)
            return node
        }
    }
    var findMinNode = function() {
        while(node && node.left !== null) {
            node = node.left
        }
        return node
    }

}

var tree = new BinarySearchTree()

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

function printNode(value) {
    console.log(value)
}
console.log('inOrderTraverseNode')
tree.inOrderTraverse(printNode)
console.log('preOrderTraverse')
tree.preOrderTraverse(printNode)
console.log('postOrderTraverse')
tree.postOrderTraverse(printNode)

console.log('min', tree.min())
console.log('max', tree.max())
console.log('exist 6', tree.search(6))

console.log('remove 6', tree.remove(6));
console.log('inOrderTraverseNode')
tree.inOrderTraverse(printNode)