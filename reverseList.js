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
let reverseList = function (head) {
	let current = head
	let previous = null
	while (current) {
		let next = current.next
		current.next = previous
		previous = current
		if (next) {
            current = next
        } else {
            break
        }
	}
	return current
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

function ListNodeToArray(list) {
	let array = []
	while (list) {
		let node = list.val
		array.push(node)
		list = list.next
	}
	return array
}

console.log(reverseList(ArrayToListNode([1, 2, 3, 4])))
console.log(reverseList(ArrayToListNode([1])))
console.log(reverseList(ArrayToListNode([])))
