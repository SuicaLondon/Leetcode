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
let sumOfLeftLeaves = function (root, isLeft) {
    if (root === null) return 0
    if (root.left === null && root.right === null && isLeft) return root.val
    return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false)
}
