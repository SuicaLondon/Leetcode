/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let deleteDuplicates = function (head) {
	let current = head
	while (current && current.next) {
		while (current.next && current.next.val === current.val) {
			current.next = current.next.next
		}
		current = current.next
	}
	return head
}

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}

function ArrayToListNode(array) {
	let lastNode
	for (let i = array.length - 1; i >= 0; i--) {
		if (lastNode) {
			lastNode = new ListNode(array[i], lastNode)
		} else {
			lastNode = new ListNode(array[i])
		}
	}
	return lastNode
}

console.log(deleteDuplicates(ArrayToListNode([1, 1, 2])))
console.log(deleteDuplicates(ArrayToListNode([1, 1, 2, 3, 3])))
console.log(deleteDuplicates(ArrayToListNode([1, 1, 1])))
