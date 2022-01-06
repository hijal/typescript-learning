"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// number to month
console.log(Intl.DateTimeFormat('en', {
    month: 'long',
}).format(new Date('12')));
// spreed operator
var arr = [1, 2, 3, 4, 5];
var newArr = [10];
newArr.push.apply(newArr, arr);
console.log(newArr);
// rest operator
var bike = {
    model: 'BMW',
    color: 'red',
};
var copiedBike = __assign({}, bike);
console.log('------------------------------');
console.log('copy bike: ', copiedBike);
console.log('------------------------------');
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, cur) { return acc + cur; }, 0);
};
var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(add.apply(void 0, list));
