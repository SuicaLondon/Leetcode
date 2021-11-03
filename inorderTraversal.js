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
 * @return {number[]}
 */
let inorderTraversal = function (root) {
    let stack = []
    let current = root
    let list = []
    while(current || stack.length > 0) {
        if (current) {
            stack.push(current)
            current = current.left
        } else {
            let node = stack.pop()
            list.push(node.val)
            current = node.right
        }
    }
    return list
}
