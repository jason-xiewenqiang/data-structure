/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * } 对比两棵二叉树，如果树的值是相同的 那么返回true 否则返回false
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let pNodes = [];
    let qNodes = [];
    const inOrderTraverse = (node, arr) => {
        if (node !== null) {
            inOrderTraverse(node.left, arr)
            arr.push(node.val)
            inOrderTraverse(node.right, arr)
        }
    }
    inOrderTraverse(p, pNodes)
    inOrderTraverse(q, qNodes)
    return pNodes.join() === qNodes.join()
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** 给定一个二叉树，返回所有从根节点到叶子节点的路径
 * @param {TreeNode} root
 * @return {string[]}
 */
 var binaryTreePaths = function(root) { // 深度优先
    if (!root) return []
    const res = [];
    const traverseTree = (root, paths) => {
        if (root) {
            paths += '' + root.val
            if (root.left === null && root.right === null) {
                res.push(paths)
            } else {
                paths += '->'
                traverseTree(root.left, paths)
                traverseTree(root.right, paths)
            }
        }
    }
    traverseTree(root, '')
    return res
};
var binaryTreePaths1 = function(root) { // 来波广度优先
    if (!root) return []
    const queue = [];
    
};
