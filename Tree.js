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
