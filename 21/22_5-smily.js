"use strict";
console.log('21.5');
const smiley_array = ["😁", "😂", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😍"];

const input_field = document.querySelector('.input-container input[type=number]');
const button = document.querySelector('.input-container input[type=button]');
const output_field = document.querySelector('.output-container');

button.addEventListener('click', () => {
	const smiley_num = parseInt(input_field.value);
	output_field.innerText = '';
	for (let i = 0; i < smiley_num; ++ i){
		output_field.innerText += '  ' + smiley_array[Math.floor(Math.random() * smiley_array.length)] + '  ';
	}
});

