function add(n1: number, n2: number, showResult: boolean, phrase: string) {
	let result = n1 + n2;

	if (showResult) {
		console.log(phrase + result);
	} else {
		return result;
	}
}

// base types of typescript.
let number1: number;
number1 = 5; // assign a number
//number1 = '5'; // error assign a string

let number2 = 2.8;
let printResult = true;
let phrase = 'Result is: ';
// phrase = 0;  // error

add(number1, number2, printResult, phrase);
