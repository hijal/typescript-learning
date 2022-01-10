type CombineStringOrNumber = string | number;
type CombineNumberOrBoolean = number | boolean;

type CombineAll = CombineStringOrNumber & CombineNumberOrBoolean;

function add(a: CombineAll, b: CombineAll) {
	if (typeof a === 'string' || typeof b === 'string') {
		// type guard
		return a.toString() + b.toString();
	}
	return a + b;
}

console.log(add(1, 2));
