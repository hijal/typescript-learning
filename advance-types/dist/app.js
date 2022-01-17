"use strict";
let errorBag = {};
errorBag.email = "hello@test.com";
errorBag.name = "hello test";
errorBag.age = 123;
console.log("------------------------------");
console.log(errorBag);
console.log("------------------------------");
function addition(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = addition(1, 5);
//# sourceMappingURL=app.js.map