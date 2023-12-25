class FoodRatings {
	private foods: string[]
	private cuisines: string[]
	private ratings: number[]
	constructor(foods: string[], cuisines: string[], ratings: number[]) {
		this.foods = foods
		this.cuisines = cuisines
		this.ratings = ratings
	}

	changeRating(food: string, newRating: number): void {
		for (let i = 0; i < this.foods.length; i++) {
			if (food === this.foods[i]) {
				this.ratings[i] = newRating
				return
			}
		}
	}

	highestRated(cuisine: string): string {
		let maxValue = 0
		let maxIndex = 0
		for (let i = 0; i < this.cuisines.length; i++) {
			if (this.cuisines[i] === cuisine) {
				if (this.ratings[i] > maxValue) {
					maxValue = this.ratings[i]
					maxIndex = i
				} else if (
					this.ratings[i] === maxValue &&
					this.foods[i] < this.foods[maxIndex]
				) {
					maxIndex = i
				}
			}
		}
		return this.foods[maxIndex]
	}
}

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */

const foodRatings = new FoodRatings(
	['kimchi', 'miso', 'sushi', 'moussaka', 'ramen', 'bulgogi'],
	['korean', 'japanese', 'japanese', 'greek', 'japanese', 'korean'],
	[9, 12, 8, 15, 14, 7]
)
foodRatings.highestRated('korean')
console.log(foodRatings.highestRated('korean'))
foodRatings.highestRated('japanese')
console.log(foodRatings.highestRated('japanese'))

foodRatings.changeRating('sushi', 16)

foodRatings.changeRating('ramen', 16)
foodRatings.highestRated('japanese')
console.log(foodRatings.highestRated('japanese'))
