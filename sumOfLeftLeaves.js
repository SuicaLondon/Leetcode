/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let sumOfLeftLeaves = function (root) {
    let count = 0
    function accessChildNodeAndRecord(node, count) {
        if (!node.left && !node.right) {
            count++
            return
        }
        if (node.left) {
            accessChildNodeAndRecord(node.left)
        }
        if (node.right) {
            accessChildNodeAndRecord(node.right)
        }
    }
    if (root === null) {
        return 0
    } else {
        accessChildNodeAndRecord(node)
        return count
    }
}
