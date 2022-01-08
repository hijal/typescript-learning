// type AddFn = (a: number, b: number) => number;

interface AddFn {
	(a: number, b: number): number;
}

let add: AddFn;

add = (a: number, b: number) => a + b;

interface Named {
	readonly name?: string;
	username?: string;
}

interface Greet extends Named {
	greet(message: string): void;
}

class Person implements Greet {
	name?: string;
	username?: string;
	age = 10;
	constructor(name?: string, username?: string) {
		if (name) {
			this.name = name;
		}
		if (username) {
			this.username = username;
		}
	}

	greet(message: string) {
		if (this.name) {
			console.log(`${message} ' ' ${this.name}`);
		}
		return;
	}
}
let user1: Greet;
// user1 = new Person();
user1 = new Person("John", "john");

user1.greet('Hello');

console.log('------------------------------');
console.log(user1);
console.log('------------------------------');
