const add: (a: number, b: number) => number = (a: number, b: number) => a + b;

const display: (a: string | number) => void = (result) => console.log(result);

display(add(1, 2));

const button = document.querySelector('button');

button &&
	button.addEventListener('click', (event) => {
		console.log(event);
	});
