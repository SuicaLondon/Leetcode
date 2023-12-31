interface Content {
	sum: number
	video: number
}

type ContentMap = Record<string, Content>

function mostPopularCreator(
	creators: string[],
	ids: string[],
	views: number[]
): string[][] {
	let max = 0
	const contentMap: ContentMap = {}
	for (let i = 0; i < ids.length; i++) {
		const creator = creators[i]
		if (contentMap[creator]) {
			contentMap[creator].sum = contentMap[creator].sum + views[i]
			if (
				views[contentMap[creator].video] < views[i] ||
				(views[contentMap[creator].video] === views[i] &&
					ids[i] < ids[contentMap[creator].video])
			) {
				contentMap[creator].video = i
			}
		} else {
			contentMap[creator] = {
				sum: views[i],
				video: i,
			}
		}
		if (contentMap[creator].sum > max) {
			max = contentMap[creator].sum
		}
	}
	let result = []
	for (const creator in contentMap) {
		if (contentMap[creator].sum === max) {
			result.push([creator, ids[contentMap[creator].video]])
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
