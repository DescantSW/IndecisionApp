const multiplier = {
	nums: [1,2,3],
	multiplyBy: 2,
	multiply() {
		return this.nums.map(num => num*this.multiplyBy)
	}
}
	

console.log(multiplier.multiply())


/* 
const user = {
	name: 'Robert',
	cities: ['Great Neck', 'New York', 'Greensboro'],
	printPlacesLived() {
		const cityMsg = this.cities.map(city => {
			return city +'!'
		})
		// console.log(this.name, 'has lived in')
		// this.cities.forEach((city) => {
			console.log(cityMsg)
		// })
	}
}

user.printPlacesLived()
 */


/* 
let fullName = 'Bob Taffet'
let firstName

if(fullName)
	firstName = fullName.split(' ')[0]

// console.log('hello ', firstName)  

const getFirstName = ((name) => {
	return name.split(' ')[0]
})

const getFirstNameVerbose = (name) => name.split(' ')[0] 

console.log(getFirstName('James Joyce'))
console.log(getFirstNameVerbose('William Faulkner'))
 */