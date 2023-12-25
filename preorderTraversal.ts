/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function preorderTraversal(root: TreeNode | null): number[] {
    let result = []
    const inorder = (node: TreeNode | null) => {
        if (node == null) return result
        result.push(node.val) 
        inorder(node.left) 
        inorder(node.right)
        return result 
    }
    return inorder(root)
};
