interface Bird {
	type: 'bird';
	flyingSpeed: number;
}

interface Penguin {
	type: 'penguin';
	swimmingSpeed: number;
}

type Animal = Bird | Penguin;

function movieAnimal(animal: Animal) {
	let speed: number;
	switch (animal.type) {
		case 'bird':
			speed = animal.flyingSpeed;
			break;
		case 'penguin':
			speed = animal.swimmingSpeed;
			break;
	}
	console.log('------------------------------');
	console.log('Move at speed:' + speed);
	console.log('------------------------------');
}

movieAnimal({ type: 'bird', flyingSpeed: 10 });