"use strict";

console.log("*** 22.1 ***");

const form = document.querySelector('.form');
const inputs_array = document.querySelectorAll('.form input');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	let input_str = `Is that infomation correct?\n`;

	inputs_array.forEach(input => {
		let input_name = input.getAttribute('name');
		if (input_name) {
			input_str += `${input_name}: ${input.value}\n`
		}
	});
	if (confirm(input_str)) {
		alert('congratulations you successfully sent this form');
	}
	else {
		alert('Please change the needed fields and submit again');
	}
})