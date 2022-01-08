"use strict";
// type AddFn = (a: number, b: number) => number;
var add;
add = function (a, b) { return a + b; };
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.age = 10;
        if (name) {
            this.name = name;
        }
        if (username) {
            this.username = username;
        }
    }
    Person.prototype.greet = function (message) {
        if (this.name) {
            console.log("".concat(message, " ' ' ").concat(this.name));
        }
        return;
    };
    return Person;
}());
var user1;
// user1 = new Person();
user1 = new Person("John", "john");
user1.greet('Hello');
console.log('------------------------------');
console.log(user1);
console.log('------------------------------');
//# sourceMappingURL=app.js.map