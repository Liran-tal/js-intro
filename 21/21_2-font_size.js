"use strict";

const FONT_SIZE_INTERVAL = 2;
const UPPER_LIMIT_PX = 60;
const LOWER_LIMIT_PX = 6;
const increase_button = document.querySelector('.increase-btn');
const decrease_button = document.querySelector('.decrease-btn');
const example_text = document.querySelector('.example-text');

function getFontSize(element) {
	return(
		window.getComputedStyle(element).getPropertyValue('font-size')
	);
}

increase_button.addEventListener('click', () => {
	let font_size = parseFloat(getFontSize(example_text));
	
	if (font_size < UPPER_LIMIT_PX - FONT_SIZE_INTERVAL + 1) {
		font_size += FONT_SIZE_INTERVAL;
	}
	
	example_text.style.fontSize = font_size + 'px';
})

decrease_button.addEventListener('click', () => {
	let font_size = parseFloat(getFontSize(example_text));
	
	if (font_size > LOWER_LIMIT_PX + FONT_SIZE_INTERVAL - 1) {
		font_size -= FONT_SIZE_INTERVAL;
	}
	
	example_text.style.fontSize = font_size + 'px';
})