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

function binaryTreePaths(root: TreeNode | null): string[] {
    let paths: string[] = []
    function drawPath(root: TreeNode | null, path: number[]) {
        path.push(root.val)
        if (root.left === null && root.right === null) {
            let str = ''
            for (let i = 0; i < path.length; i++) {
                str += path[i]
                if (i != path.length - 1) str += '->'
            }
            paths.push(str)
        }
        if (root.left !== null) drawPath(root.left, Array.from(path))
        if (root.right !== null) drawPath(root.right, Array.from(path))
    } 
    drawPath(root, [])
    return paths
};
