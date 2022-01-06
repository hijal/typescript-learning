"use strict";
var add = function (a, b) { return a + b; };
var display = function (result) { return console.log(result); };
display(add(1, 2));
var button = document.querySelector('button');
button &&
    button.addEventListener('click', function (event) {
        console.log(event);
    });
