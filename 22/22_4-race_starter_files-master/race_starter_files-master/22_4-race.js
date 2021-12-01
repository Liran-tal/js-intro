"use strict";

console.log('*** 22.4 ***');


const track_length = document.querySelectorAll('#player1-race td').length;
console.log(track_length);
const player1_track = document.querySelector('#player1-race .active');
console.log(player1_track);
const player2_track = document.querySelector('#player2-race .active');
console.log(player2_track);

const restart_button = document.querySelector('.restart-btn');
console.log(restart_button);

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
		
	}
}

window.addEventListener('keyup', evaluateKey);
restart_button.addEventListener('click', () => {
	window.location.reload();
});