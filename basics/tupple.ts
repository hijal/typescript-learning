const Person: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string];
} = {
	name: 'hijal',
	age: 27,
	hobbies: ['cooking', 'sports'],
	role: [1, 'admin'],
};

// Person.role.push('moderator'); // its exception

// Person.role[1] = 1; // error
// Person.role = [0, 'test', 'test2']; // error

let favoriteActivities: any[];

favoriteActivities = ['gaming'];

console.log(Person.name);

for (const hobby of Person.hobbies) {
	console.log(hobby.toUpperCase());
}
