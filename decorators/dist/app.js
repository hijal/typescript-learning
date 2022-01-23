"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function WithTemplate(template, hookId) {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super(10, 10);
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1').textContent =
                        'Area of Polygon: ' + this.area;
                }
            }
        };
    };
}
let Polygon = class Polygon {
    constructor(h, w) {
        this.height = h;
        this.width = w;
    }
    get area() {
        return this.height * this.width;
    }
};
Polygon = __decorate([
    WithTemplate('<h1>Test</h1>', 'app')
], Polygon);
let p1 = new Polygon(10, 20);
console.log('------------------------------');
console.log(p1.area);
console.log('------------------------------');
//# sourceMappingURL=app.js.map