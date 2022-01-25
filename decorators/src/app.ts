function AutoBind(
	_: any,
	_1: string | Symbol | number,
	descriptor: PropertyDescriptor
) {
	const originalMethod = descriptor.value;
	const adjDescriptor = {
		configurable: true,
		enumerable: false,
		get() {
			const boundFn = originalMethod.bind(this);
			return boundFn;
		},
	};
	return adjDescriptor;
}
class Printer {
	message = 'Hello World';

	@AutoBind
	showMessage() {
		console.log(this.message);
	}
}

const p = new Printer();

const button = document.querySelector('button') as HTMLButtonElement;
button?.addEventListener('click', p.showMessage);
