function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
// base types of typescript.
var number1;
number1 = 5; // assign a number
//number1 = '5'; // error assign a string
var number2 = 2.8;
var printResult = true;
var phrase = 'Result is: ';
// phrase = 0;  // error
add(number1, number2, printResult, phrase);
