function add(a: number, b: number): number {
	return a + b;
}

function display(result: number): void {
	console.log(result);
}

display(add(1, 2));

let combines: (a: number, b: number) => number;

combines = add;
// combines = display;
// combines = 5;

console.log(combines(10, 10));

// person object js
function findAll(name: string, age: number): object {
	return {
		name: name,
		age: age,
	};
}

function response(obj: object): void {
	console.log(obj);
}

let showResponse: (name: string, age: number) => object;
console.log('------------------------------');
response(findAll('John', 30))
console.log('------------------------------');

showResponse = findAll;

console.log(showResponse('John', 30));