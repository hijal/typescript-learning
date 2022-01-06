"use strict";
var discount = function (price, rate) {
    if (rate === void 0) { rate = 0.1; }
    return price * (1 - rate);
};
var getDay = function (month, year) {
    if (year === void 0) { year = new Date().getFullYear(); }
    var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 2) {
        // leap year condition
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            return 29;
        }
        return 28;
    }
    return days[month - 1];
};
var display = function (result, message) { return console.log(message + ': ', result); };
display(discount(10), 'Discount');
display(getDay(2), "Days");
