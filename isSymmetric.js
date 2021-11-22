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
 * @return {boolean}
 */
let isSymmetric = function (root) {
    const checkSymmetric = (node1, node2) =>{
        if (!node1 && !node2) return true
		if (!node1 || !node2) return false
		if (node1.val === node2.val) {
			return checkSymmetric(node1.left, node2.right) && checkSymmetric(node1.right, node2.left)
		} else {
            return false
        }
    }
    return checkSymmetric(root.left, root.right)
}
