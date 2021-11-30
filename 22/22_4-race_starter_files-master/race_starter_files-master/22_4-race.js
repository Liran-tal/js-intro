"use strict";

console.log('*** 22.4 ***');



const restart_button = document.querySelector('.restart-button');

function evaluateKey(event) {
	const key = event.code;
	
	if (key === 39) {
		letterCorrect();
	}
	if (key.toUpperCase() === 'D'){
		letterWrong(key);
	}
}

window.addEventListener('keyup', evaluateKey);
restart_button.addEventListener('click', () => {
	window.location.reload();
});