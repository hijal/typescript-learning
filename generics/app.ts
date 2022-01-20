// create generic function

function merge<T, U>(obj1: T, obj2: U): T & U {
	return Object.assign(obj1, obj2);
}

// console.log('------------------------------');
// console.log(merge({ name: 'John' }, { age: 30 }));
// console.log('------------------------------');

// const mergeObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
// 	{ name: 'John', hobbies: ['coding'] },
// 	{ age: 30 }
// );

const mergeObj = merge({ name: 'John', hobbies: ['coding'] }, { age: 30 });
console.log(mergeObj);
