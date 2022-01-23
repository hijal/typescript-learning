function Log(target: any, propertyName: string | Symbol) {
	console.log('Property decorator!');
	console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
	console.log('Accessor decorator!');
	console.log(target);
	console.log(name);
	console.log(descriptor);
}

class Product {
	@Log
	title: string;
	private _price: number;

	@Log2
	set price(val: number) {
		if (val > 0) {
			this._price = val;
		} else {
			throw new Error('Invalid price - should be positive!');
		}
	}

	constructor(t: string, p: number) {
		this.title = t;
		this._price = p;
	}

	getPriceWithTax(tax: number) {
		return this._price * (1 + tax);
	}
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);
