"use strict"

console.log('2.4 test');
const lightbulb = document.querySelector('.lightbulb-container');
console.log(lightbulb);
const button = document.querySelector('.container input');
console.log(button);
button.addEventListener('click', () => {
	lightbulb.classList.toggle('light-on');
	lightbulb.classList.toggle('light-off');
})
