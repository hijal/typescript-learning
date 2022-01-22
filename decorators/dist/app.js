"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(target, prodName) {
    console.log('Property decorator');
    console.log(target);
    console.log(prodName);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val < 0) {
            throw 'Invalid price - should be positive';
        }
        this._price = val;
    }
    getPriceWithTax(tax) {
        return this._price * (10 + tax);
    }
}
__decorate([
    Logger
], Product.prototype, "title", void 0);
// const prod1 = new Product('Book', 20);
// console.log(prod1.getPriceWithTax(5));
//# sourceMappingURL=app.js.map