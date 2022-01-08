interface Person {
	name: string;
	age: number;
	greet(message: string): void;
}

let user1: Person;

user1 = {
	name: 'John',
	age: 30,
	greet(msg: string): void {
		console.log(msg + ' ' + this.name);
	},
};

user1.greet('Hello');
