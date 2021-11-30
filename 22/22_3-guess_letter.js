"use stirct";

console.log("*** 22.3 ***");

const guessed_letters_array = [];
const display_letter_to_guess = document.querySelector('.to-guess-box');
const letter_to_guess = generateRandomLetter();
const display_message = document.querySelector('.messages-box');
const guessed_container = document.querySelector('.guessed-container');
const display_guessed_letters = document.querySelector('.guessed-Letters');
const new_game_container = document.querySelector('.new-game-container');
const restart_button = document.querySelector('.restart-button');

function generateRandomLetter(){
	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	return chars.charAt(Math.floor(Math.random() * chars.length));
}

function letterCorrect() {
	display_letter_to_guess.innerText = letter_to_guess;
	display_message.style.color = 'green'
	display_message.innerText = 'You Guessed Correct!'
	guessed_container.classList.add('dont-display');
	new_game_container.classList.remove('dont-display');
}

function letterWrong(key) {
	if (guessed_letters_array.includes(key)){
		display_message.innerText = `${key} Has Already Been Guessed!`;
	}
	else{
		guessed_letters_array.push(key)
	}
}

function evaluateKey(event) {
	const key = event.key.toUpperCase();
	
	if (key === letter_to_guess) {
		letterCorrect();
	}
	else if (/^[A-Za-z]$/.test(key)){
		letterWrong(key);
	}
	else {
		display_message.innerText = 'Please Enter a Valid Letter';
	}
	display_guessed_letters.innerText = guessed_letters_array.join(', ');
}

document.body.addEventListener('keyup', evaluateKey);
restart_button.addEventListener('click', () => {
	window.location.reload();
});
 