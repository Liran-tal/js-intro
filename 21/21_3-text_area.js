"use strict";

console.log('21.3 test');
const text_area_btn = document.querySelector('.myBtn');
const warningMsg = document.querySelector('.warningMsg');
const text_area = document.querySelector('#myTextArea');

text_area_btn.addEventListener('click', () => {
	// console.log('listener test');
	const input_length = text_area.value.length;
	if (input_length < 100) {
		text_area.addEventListener('input', countChars);
		countChars();
	}
})

function countChars(event) {
	const input_length = text_area.value.length;
	if (input_length < 100) {
		warningMsg.innerText = `Please enter 100 charecters or more (${input_length} / 100)`;
	}
	else{
		warningMsg.innerText = '';
	}
}