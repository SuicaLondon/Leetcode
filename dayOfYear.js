/**
 * @param {string} date
 * @return {number}
 */
let dayOfYear = function (date) {
	let dateList = date.split('-')
	let year = parseInt(dateList[0], 10),
		month = parseInt(dateList[1], 10),
		day = parseInt(dateList[2], 10)
        amount = 0
    for (let i = 1; i<= month;i++) {
        if (i!== month) {
            amount += getDaysOfMonth(year, i)
        } else {
            amount += day
        }
    }
    return amount
}

function getDaysOfMonth(year, month) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31
        case 2:
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
                ? 29
                : 28
        case 4:
        case 6:
        case 9:
        case 11:
            return 30
    }
}

console.log(dayOfYear('2019-01-09'))
console.log(dayOfYear('2019-02-10'))
console.log(dayOfYear('2003-03-01'))
console.log(dayOfYear('2004-03-01'))
