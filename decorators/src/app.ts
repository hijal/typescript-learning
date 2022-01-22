function Logger(logStr: string) {
	return function (constructor: Function) {
		console.log(logStr);
		console.log(constructor);
	};
}

function WithResult(template: string, hookId: string) {
	return function (constructor: any) {
		const shape = new constructor(10, 10);
		const hookEl = document.getElementById(hookId);
		if (hookEl) {
			hookEl.innerHTML = template + ' : ' + shape.area;
		}
	};
}
@WithResult('Area of shape ', 'app')
@Logger('Logging - Rectangle')
class Rectangle {
	height: number;
	width: number;

	constructor(h: number, w: number) {
		this.height = h;
		this.width = w;
	}

	get area() {
		return this.calcArea();
	}

	calcArea() {
		return this.height * this.width;
	}
}

const square = new Rectangle(10, 10);

console.log('------------------------------');
console.log('Area:', square.area);
console.log('------------------------------');
