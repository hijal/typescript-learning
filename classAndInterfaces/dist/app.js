"use strict";
var Person = /** @class */ (function () {
    function Person(name) {
        this.age = 10;
        this.name = name;
    }
    Person.prototype.greet = function (message) {
        console.log(message + ' ' + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person('hijal');
user1.greet('Hello');
console.log('------------------------------');
console.log(user1);
console.log('------------------------------');
//# sourceMappingURL=app.js.map