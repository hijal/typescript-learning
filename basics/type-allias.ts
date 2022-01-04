enum TypeConversion {
	'AS-NUMBER',
	'AS-TEXT',
}

type Combinable = number | string;

function combine(n1: Combinable, n2: Combinable, conversion: TypeConversion) {
	if (
		(typeof n1 === 'number' && typeof n2 === 'number') ||
		conversion === TypeConversion['AS-NUMBER']
	) {
		return +n1 + +n2;
	}
	return n1.toString().toUpperCase() + ' ' + n2.toString().toUpperCase();
}

console.log(combine(10, 10, TypeConversion['AS-NUMBER']));
console.log(combine('10', '10', TypeConversion['AS-NUMBER']));
console.log(combine('hijikesh', 'hijal', TypeConversion['AS-TEXT']));
