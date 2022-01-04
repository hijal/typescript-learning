enum Role {
	ADMIN = 0, // can assign any value or default value is 0
	READ_ONLY = 1,
	AUTHOR = 2,
}

const Person = {
	name: 'hijal',
	age: 27,
	hobbies: ['cooking', 'sports'],
	role: Role.ADMIN,
};

console.log(Person.name);

for (const hobby of Person.hobbies) {
	console.log(hobby.toUpperCase());
}

if (Person.role === Role.ADMIN) {
	console.log('is admin');
}
