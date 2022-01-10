type Admin = {
	name: string;
	hobbies: string[];
};

type Admin2 = {
	name: string;
	age: number;
};

type CombineAdmin = Admin & Admin2;

const ad1: CombineAdmin = {
	name: 'John',
	age: 30,
	hobbies: ['Sports', 'Cooking'],
};

console.log('------------------------------');
console.log(ad1);
console.log('------------------------------');

interface Animal {
	name: string;
	color: string;
}

interface Cat {
	name: string;
	origin: string;
}

interface CombineAnimal extends Animal, Cat {}

const animal1: CombineAnimal = {
	name: 'Abyssinian',
	color: 'black',
	origin: 'Egypt',
};

console.log('------------------------------');
console.log(animal1);
console.log('------------------------------');

type StringOrNumber = string | number;
type NumberOrBoolean = number | boolean;

type CombineStringNumberBoolean = StringOrNumber & NumberOrBoolean;

// const test1 : CombineStringNumberBoolean = 'Hello TypeScript!'; // expect number get string
const test1: CombineStringNumberBoolean = 1000;
console.log('------------------------------');
console.log(test1);
console.log('------------------------------');
