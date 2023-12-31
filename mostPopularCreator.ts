interface Content {
	sum: number
	max: number
	maxId: string
}

type ContentMap = Record<string, Content>

function mostPopularCreator(
	creators: string[],
	ids: string[],
	views: number[]
): string[][] {
	const contentMap: ContentMap = {}
	for (let i = 0; i < ids.length; i++) {
		const creator = creators[i]
		const id = ids[i]
		const view = views[i]
		if (contentMap[creator]) {
			if (view > contentMap[creator].max) {
				contentMap[creator] = {
					sum: contentMap[creator].sum + view,
					max: view,
					maxId: id,
				}
			} else if (view === contentMap[creator].max) {
				if (id < contentMap[creator].maxId) {
					contentMap[creator].maxId = id
				}
				contentMap[creator].sum = contentMap[creator].sum + view
			} else {
				contentMap[creator].sum = contentMap[creator].sum + view
			}
		} else {
			contentMap[creator] = {
				sum: view,
				max: view,
				maxId: id,
			}
		}
	}
	let max = 0
	let result = []
	for (const creator in contentMap) {
		if (contentMap[creator].sum > max) {
			max = contentMap[creator].sum
			result = [[creator, contentMap[creator].maxId]]
		} else if (contentMap[creator].sum === max) {
			result.push([creator, contentMap[creator].maxId])
		}
	}
	return result
}

console.log(
	mostPopularCreator(
		['alice', 'bob', 'alice', 'chris'],
		['one', 'two', 'three', 'four'],
		[5, 10, 5, 4]
	)
)
console.log(
	mostPopularCreator(['alice', 'alice', 'alice'], ['a', 'b', 'c'], [1, 2, 2])
)
console.log(mostPopularCreator(['a', 'a'], ['aa', 'a'], [5, 5]))
