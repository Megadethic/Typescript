var button = document.getElementById('btn');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var output = document.getElementById('output');
function add(seed, num1, num2) {
    return seed + num1 + num2;
}
var seed;
var mixedArray = [0, 'asdasd'];
mixedArray.push('pss');
button.addEventListener('click', function () {
    seed = '5';
    console.log(add(seed, +input1.value, +input2.value));
    console.log(mixedArray);
});
