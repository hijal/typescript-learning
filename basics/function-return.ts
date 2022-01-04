function add(n1: number, n2: number): number {
	return n1 + n2;
}

function display(result: number): void {
	console.log(result);
}

display(add(50, 50));

function Bike(model: string, color: string): void {
	this.model = model;
	this.color = color;
}

Bike.prototype.getDetails = function (): string {
	return `The bike is ${this.color} and ${this.model}`;
};

const bikeObj = new Bike('Pulsar', 'Red');
console.log(bikeObj.getDetails());

class Person {
	height: string;
	color: string;

	constructor(height: string, color: string) {
		this.height = height;
		this.color = color;
	}
	getDetails() {
		return `The person is ${this.color} and ${this.height}`;
	}
}

const person = new Person('tall', 'black');
console.log(person.getDetails());
