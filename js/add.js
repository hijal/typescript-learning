var button = document.getElementById('add');
var inp1 = document.getElementById('number-one');
var inp2 = document.getElementById('number-two');
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log(add(+inp1.value, +inp2.value) + ' !!!!');
});
