var button = document.getElementById('btn');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var output = document.getElementById('output');
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
    console.log('pasha');
});
