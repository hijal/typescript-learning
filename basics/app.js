function add(a, b) {
    return a + b;
}
function display(result) {
    console.log(result);
}
display(add(1, 2));
var combines;
combines = add;
// combines = display;
// combines = 5;
console.log(combines(10, 10));
// person object js
function findAll(name, age) {
    return {
        name: name,
        age: age
    };
}
function response(obj) {
    console.log(obj);
}
var showResponse;
console.log('------------------------------');
response(findAll('John', 30));
console.log('------------------------------');
showResponse = findAll;
console.log(showResponse('John', 30));
