function addOneRow(
	root: TreeNode | null,
	val: number,
	depth: number
): TreeNode | null {
	function accessNextRow(childRoot: TreeNode | null, currentDepth: number) {
		if (currentDepth === depth) {
			let branch = childRoot
			root = new TreeNode(val, branch, null)
			return
		}

		const nextDepth = currentDepth + 1
		if (childRoot.left) {
			if (nextDepth === depth) {
				let branch = childRoot.left
				childRoot.left = new TreeNode(val, branch, null)
			} else {
				accessNextRow(childRoot.left, nextDepth)
			}
		} else {
			if (nextDepth === depth) {
				childRoot.left = new TreeNode(val, null, null)
			}
		}

		if (childRoot.right) {
			if (nextDepth === depth) {
				let branch = childRoot.right
				childRoot.right = new TreeNode(val, null, branch)
			} else {
				accessNextRow(childRoot.right, nextDepth)
			}
		} else {
			if (nextDepth === depth) {
				childRoot.right = new TreeNode(val, null, null)
			}
		}
	}
	accessNextRow(root, 1)
	return root
}
