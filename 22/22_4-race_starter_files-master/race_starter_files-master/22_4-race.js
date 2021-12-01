"use strict";

console.log('*** 22.4 ***');


const player1_track = document.querySelectorAll('#player1-race td'); 
const player2_track = document.querySelectorAll('#player2-race td');
const track_length = player1_track.length;
const win_screen = document.querySelector('win-popup');
const text_field = document.querySelector('.win-popup-text');
const restart_button = document.querySelector('.restart-btn');

function setWinScreenColors(color) {
	text_field.style.color = color;
	restart_button.style.color = color;
	restart_button.style.borderColor = color;
}

function win(player) {
	const p1_color = 'red';
	const p2_color = 'yellow';

	if (player === 'p1') {
		text_field.innerText = 'Player 1 Wins!!!'
		setWinScreenColors(p1_color);
	}
	else {
		text_field.innerText = 'Player 2 Wins!!!'
		setWinScreenColors(p2_color);
	}

	win_screen.classList.remove('hide'); 
}

function moveIcon(current_pos) {
	current_pos.classList.remove('active');
	current_pos.nextElementSibling.classList.add('active');
}

function evaluateKey(event) {
	const key = event.key;
	const p1_current_place = document.querySelector('#player1-race .active');
	const p1_finish = document.querySelector('#player1-race .finish');
	const p2_current_place = document.querySelector('#player2-race .active')
	const p2_finish = document.querySelector('#player2-race .finish')
	if (key === 'ArrowRight') {
		moveIcon(p1_current_place);
	}
	if (key.toUpperCase() === 'D'){
		moveIcon(p2_current_place);
	}

	if (p1_current_place.classList.contains('.finish')) {
		win ('p1');	
	}
	else if (p2_current_place === p2_finish) {
		win ('p2');
	}
}

window.addEventListener('keyup', evaluateKey);
restart_button.addEventListener('click', () => {
	window.location.reload();
});