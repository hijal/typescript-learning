function Logger(constructor: Function) {
	console.log('logging......');
	console.log('------------------------------');
	console.log(constructor);
	console.log('------------------------------');
}

@Logger
class Person {
	name = 'Typescript';
	constructor() {
		console.log(this.name);
	}
}

const person = new Person();

console.log(person);
