interface Named {
	readonly name: string;
}

interface Greet extends Named {
	greet(message: string): void;
}

class Person implements Greet {
	name: string;
	age = 10;
	constructor(name: string) {
		this.name = name;
	}

	greet(message: string) {
		console.log(message + ' ' + this.name);
	}
}
let user1: Greet;
user1 = new Person('hijal');

user1.greet('Hello');

console.log('------------------------------');
console.log(user1);
console.log('------------------------------');
