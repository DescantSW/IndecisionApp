class Person {
	constructor(name= 'Anonomous', age=0) {
		this.name = name
		this.age = age
		console.log(this.name)
	}

	getGreeting() {
		return `Hello ${this.name}`
	}

	getDescription() {
		return `${this.name} is ${this.age} years old.`
	}

}

class Student extends Person{
	constructor(name, age, major) {	
		super(name, age)
		this.major = major
	}
	hasMajor() {
		return !!this.major
	}
	getDescription() {
		let description = super.getDescription()
		if(this.hasMajor())
			description += `  Their major is ${this.major} `
		return description
	}
}

class Traveler extends Person{
	constructor(name, age, homeLocation) {	
		super(name, age)
		this.homeLocation = homeLocation
	}

	getGreeting() {
		let description = `Hello, I'm ${this.name}.`
		if(this.homeLocation)
			description += `  I'm visiting from ${this.homeLocation}.`
		return description
	}
}

const me = new Traveler('Bob Taffet', 67, 'New York') 
console.log(me.getGreeting())

const him = new Traveler() 
console.log(him.getGreeting())
