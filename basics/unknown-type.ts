let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'hello unknown';

if (typeof userInput === 'string') {
	userName = userInput;
}

console.log(userName);
