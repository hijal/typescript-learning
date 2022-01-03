const button = document.getElementById('add');
const inp1 = document.getElementById('number-one')! as HTMLInputElement;
const inp2 = document.getElementById('number-two')! as HTMLInputElement;

function add(num1: number, num2: number) {
	return num1 + num2;
}

button.addEventListener('click', function () {
	console.log(add(+inp1.value, +inp2.value) + ' !!!!');
});
