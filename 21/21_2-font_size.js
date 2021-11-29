"use strict";
const increase_button = document.querySelector('.increase-btn');
const decrease_button = document.querySelector('.decrease-btn');

increase_button.addEventListener('click', () => {
	const example_text = document.querySelector('.example-text');
	let font_size = 
		window.getComputedStyle(example_text)
		.getPropertyValue('font-size')
		.match(/\d*\.?\d*/)[0];
	
	font_size = parseFloat(font_size);
	if (font_size < 59) {
		font_size += 2;
	}
	
	example_text.style.fontSize = font_size + 'px';
})

decrease_button.addEventListener('click', () => {
	const example_text = document.querySelector('.example-text');
	let font_size = 
		window.getComputedStyle(example_text)
		.getPropertyValue('font-size')
		.match(/\d*\.?\d*/)[0];
	
	font_size = parseFloat(font_size);
	if (font_size > 7) {
		font_size -= 2;
	}
	
	example_text.style.fontSize = font_size + 'px';
})