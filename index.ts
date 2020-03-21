const button = document.getElementById('btn');
const input1 = document.getElementById('input1')! as HTMLInputElement;
const input2 = document.getElementById('input2')! as HTMLInputElement;
const output = document.getElementById('output');

function add(seed: any, num1: number, num2: number) {
    return seed + num1 + num2;
}

let seed: (string | number);
let mixedArray: [number, string] = [0, 'asdasd'];
mixedArray.push('pss');

button.addEventListener('click', function () {
    seed = '5';
    console.log(add(seed, +input1.value, +input2.value));
    console.log(mixedArray);
});
