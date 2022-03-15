class Course {
	title: string;
	price: number;

	constructor(t: string, p: number) {
		this.title = t;
		this.price = p;
	}
}

const formCourse = document.querySelector('form') as HTMLFormElement;

formCourse.addEventListener('submit', (e) => {
	e.preventDefault();

	const titleEl = document.querySelector('#title') as HTMLInputElement;
	const priceEl = document.querySelector('#price') as HTMLInputElement;
	const title = titleEl.value;
	const price = +priceEl.value;

	const course = new Course(title, price);
	console.log(course);
});
