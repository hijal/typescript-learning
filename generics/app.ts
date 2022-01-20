interface Lengthy {
	length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
	let description = 'Got no value';
	if (element.length === 1) {
		description = 'Got 1 element';
	} else if (element.length > 1) {
		description = 'Got ' + element.length + ' elements';
	}
	return [element, description];
}

console.log('------------------------------');
console.log(countAndPrint(['a', 'b', 'c']));
console.log(countAndPrint('hello typescript'));
console.log('------------------------------');
