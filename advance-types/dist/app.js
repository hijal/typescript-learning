"use strict";
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        // type guard
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add(1, 2));
//# sourceMappingURL=app.js.map