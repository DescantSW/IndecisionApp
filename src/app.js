// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

ReactDOM.render(<IndecisionApp options={['opt1', 'opt2']} />, document.getElementById('app'));
/* 
class OldSyntax {
	constructor() {
		this.name = 'Mike'
		this.getGreeting = this.getGreeting.bind(this)
	}
	getGreeting = () => {
		return `Hi, my name is ${this.name}.`
	}
}
const oldSyntax = new OldSyntax()
const getGretting  = oldSyntax.getGreeting
// console.log(getGreeting())


// ------------------------

class NewSyntax {
	name = 'Jen'
	getGreeting = () => {
		return `Hi, my name is ${this.name}.`
	}
}
const newSyntax = new NewSyntax()
const newGetGreeting = newSyntax.getGreeting
console.log(newGetGreeting()) */