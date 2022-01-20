class DataStore<T extends string | number | boolean> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		this.data.splice(this.data.indexOf(item), 1);
	}

	getItems() {
		return [...this.data];
	}
}

const textStore = new DataStore<string>();
textStore.addItem('Hello');
textStore.addItem('World');
textStore.removeItem('Hello');

console.log(textStore.getItems());

const listOfNumbers = new DataStore<number>();
listOfNumbers.addItem(1);
listOfNumbers.addItem(2);
listOfNumbers.addItem(3);
listOfNumbers.removeItem(2);

console.log('------------------------------');
console.log(listOfNumbers.getItems());
console.log('------------------------------');

// const storeObject = new DataStore<object>();

// storeObject.addItem({ name: 'John' });
// storeObject.addItem({ name: 'Jane' });
// storeObject.addItem({ name: 'Joe' });

// storeObject.removeItem({ name: 'Jane' });

// console.log('------------------------------');
// console.log(storeObject.getItems());
// console.log('------------------------------');
