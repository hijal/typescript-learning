function WithTemplate(template: string, hookId: string) {
	return function <T extends { new (...args: any[]): { area: number } }>(
		originalConstructor: T
	) {
		return class extends originalConstructor {
			constructor(..._: any[]) {
				super(10, 10);
				const hookEl = document.getElementById(hookId);
				if (hookEl) {
					hookEl.innerHTML = template;
					(hookEl.querySelector('h1') as HTMLHeadElement).textContent =
						'Area of Polygon: ' + this.area;
					// this.area.toString();
				}
			}
		};
	};
}

@WithTemplate('<h1>Test</h1>', 'app')
class Polygon {
	height: number;
	width: number;

	constructor(h: number, w: number) {
		this.height = h;
		this.width = w;
	}

	get area() {
		return this.height * this.width;
	}
}

let p1 = new Polygon(10, 20);
console.log('------------------------------');
console.log(p1.area);
console.log('------------------------------');
