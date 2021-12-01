"use strict";

console.log('*** 22.4 ***');


const track_length = document.querySelectorAll('#player1-race td').length;
const player1_track = document.querySelector('#player1-race .active');
const player2_track = document.querySelector('#player2-race .active');

function win(player) {
	const win_screen = document.querySelector('win-popup')
	const text_field = document.querySelector('.win-popup-text');
	const restart_button = document.querySelector('.restart-btn');
	const p1_color = 'red';
	const p2_color = 'yellow';

	if (player === 'p1') {
		text_field.innerText = 'Player 1 Wins!!!'
		text_field.style.color = p1_color;
		restart_button.style.color = p1_color;
		restart_button.style.borderColor = p1_color;
	}
	else {
		text_field.innerText = 'Player 2 Wins!!!'
		text_field.style.color = p2_color;
		restart_button.style.color = p2_color;
		restart_button.style.borderColor = p2_color;
	}


}

function evaluateKey(event) {
	const key = event.key;
	let p1_steps = 1;
	let p2_steps = 1;
	if (key === 'ArrowRight') {
		++ p1_steps;
	}
	if (key.toUpperCase() === 'D'){
		++ p2_steps;
	}

	if (p1_steps === track_length) {
		win ('p1');	
	}
	else if (p2_steps === track_length) {
		win ('p2');
	}
}

window.addEventListener('keyup', evaluateKey);
restart_button.addEventListener('click', () => {
	window.location.reload();
});