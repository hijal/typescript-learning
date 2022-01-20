function extractAndConvert<T extends object, U extends keyof T>(
	obj: T,
	key: U
) {
	return obj[key];
}

console.log('------------------------------');
console.log(extractAndConvert({ name: 'typescript' }, 'name'));
console.log('------------------------------');
