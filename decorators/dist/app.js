"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logStr) {
    console.log('Logger Factory');
    return function (constructor) {
        console.log(logStr);
        console.log(constructor);
    };
}
function WithResult(template, hookId) {
    console.log('Template Factory');
    return function (constructor) {
        console.log('Rendering template');
        const shape = new constructor(10, 10);
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template + ' : ' + shape.area;
        }
    };
}
let Rectangle = class Rectangle {
    constructor(h, w) {
        this.height = h;
        this.width = w;
    }
    get area() {
        return this.calcArea();
    }
    calcArea() {
        return this.height * this.width;
    }
};
Rectangle = __decorate([
    Logger('Logging - Rectangle'),
    WithResult('Area of shape ', 'app')
], Rectangle);
const square = new Rectangle(10, 10);
console.log('------------------------------');
console.log('Area:', square.area);
console.log('------------------------------');
//# sourceMappingURL=app.js.map