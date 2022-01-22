function Logger(target: any, prodName: string | Symbol) {
	console.log('Property decorator');
	console.log(target);
	console.log(prodName);
}

class Product {
	@Logger
	title: string;
	private _price: number;

	set price(val: number) {
		if (val < 0) {
			throw 'Invalid price - should be positive';
		}
		this._price = val;
	}

	constructor(t: string, p: number) {
		this.title = t;
		this._price = p;
	}

	getPriceWithTax(tax: number) {
		return this._price * (10 + tax);
	}
}

// const prod1 = new Product('Book', 20);
// console.log(prod1.getPriceWithTax(5));
