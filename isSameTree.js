/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
let isSameTree = function (p, q) {
	const isChildNodeSame = (node1, node2) => {
		if (!node1 && !node2) return true
		if (!node1 || !node2) return false
		if (node1.val === node2.val) {
			return isChildNodeSame(node1.left, node2.left) && isChildNodeSame(node1.right, node2.right)
		} else {
            return false
        }
	}
    return isChildNodeSame(p, q)
}
