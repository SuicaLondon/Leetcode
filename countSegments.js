/**
 * @param {string} s
 * @return {number}
 */
let countSegments = function (s) {
	if(s.trim().length===0) return 0
    let list = s.trim().split(' ')
    for (let i = 0; i< list.length; i++) {
        if(list[i] === '') {
            list.splice(i, 1) 
            i--
        }
    }
	return list.length
}

console.log(countSegments('Hello, my name is John'))
console.log(countSegments('Hello'))
console.log(countSegments("love live! mu'sic forever"))
console.log(countSegments(" "))
console.log(countSegments("    "))
console.log(countSegments("Of all the gin joints in all the towns in all the world,   "))
