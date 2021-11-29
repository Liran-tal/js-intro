"use strict";
console.log('21.5');
const smiley_array = ["😁", "😂", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😍"];

const input_field = document.querySelector('.input-container input[type=text]');
const button = document.querySelector('.input-container input[type=button]');
const output_field = document.querySelector('.output-container');

button.addEventListener('click', () => {
	const smiley_num = parseInt(input_field.value);
	console.log(smiley_num);
});

