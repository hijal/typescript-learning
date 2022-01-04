function add(n1, n2) {
    return n1 + n2;
}
function display(result) {
    console.log(result);
}
display(add(50, 50));
function Bike(model, color) {
    this.model = model;
    this.color = color;
}
Bike.prototype.getDetails = function () {
    return "The bike is ".concat(this.color, " and ").concat(this.model);
};
var bikeObj = new Bike('Pulsar', 'Red');
console.log(bikeObj.getDetails());
var Person = /** @class */ (function () {
    function Person(height, color) {
        this.height = height;
        this.color = color;
    }
    Person.prototype.getDetails = function () {
        return "The person is ".concat(this.color, " and ").concat(this.height);
    };
    return Person;
}());
var person = new Person('tall', 'black');
console.log(person.getDetails());
