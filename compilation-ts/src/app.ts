// number to month
console.log(
	Intl.DateTimeFormat('en', {
		month: 'long',
	}).format(new Date('12'))
);

// spreed operator

const arr = [1, 2, 3, 4, 5];

const newArr = [10];
newArr.push(...arr);

console.log(newArr);

// rest operator

const bike = {
	model: 'BMW',
	color: 'red',
};

const copiedBike = { ...bike };

console.log('------------------------------');
console.log('copy bike: ', copiedBike);
console.log('------------------------------');

const add: (...numbers: number[]) => number = (...numbers: number[]) => {
	return numbers.reduce((acc, cur) => acc + cur, 0);
};

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(add(...list));
