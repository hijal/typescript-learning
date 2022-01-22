function Logger(logStr: string) {
	console.log('Logger Factory');
	return function (constructor: Function) {
		console.log(logStr);
		console.log(constructor);
	};
}

function WithResult(template: string, hookId: string) {
	console.log('Template Factory');
	return function (constructor: any) {
		console.log('Rendering template');
		const shape = new constructor(10, 10);
		const hookEl = document.getElementById(hookId);
		if (hookEl) {
			hookEl.innerHTML = template + ' : ' + shape.area;
		}
	};
}
@Logger('Logging - Rectangle')
@WithResult('Area of shape ', 'app')
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
