function combine(n1: number | string, n2: number | string) {
	if (typeof n1 === 'number' && typeof n2 === 'number') {
		return n1 + n2;
	}
	return n1.toString() + ' ' + n2.toString();
}

console.log(combine(10, 20));
console.log(combine('hijikesh', 'hijal'));
