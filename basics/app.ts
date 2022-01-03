const Person = {
	name: 'hijal',
	age: 27,
	hobbies: ['cooking', 'sports'],
};

let favoriteActivities: any[];

favoriteActivities = ['gaming'];

console.log(Person.name);

for (const hobby of Person.hobbies) {
	console.log(hobby.toUpperCase());
}
