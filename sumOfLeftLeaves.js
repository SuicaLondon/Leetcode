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
    function accessChildNodeAndRecord(node, count, leaf) {
        if (node.left === null && node.right === null) {
            if (leaf && leaf === 'left') {
                count += node.val
            }
        } else {
            if (node.left) {
                count = accessChildNodeAndRecord(node.left, count, 'left')
            } 
            if (node.right) {
                count = accessChildNodeAndRecord(node.right, count, 'right')
            }
        }
        return count
    }
    if (root === null) {
        return 0
    } else {
        count = accessChildNodeAndRecord(root, count)
        return count
    }
}
