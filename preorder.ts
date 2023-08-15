/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function preorder(root: Node | null): number[] {
    let result = []
    const preorderTraversal = (node: Node | null) => {
        if (node == null) return result
        result.push(node.val)
        for (let i = 0; i < node.children.length; i++) {
            preorderTraversal(node.children[i])
        }
        return result
    }
    return preorderTraversal(root)
};
