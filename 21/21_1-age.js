"use strict";

const check_btn = document.querySelector("input[type=button]");
check_btn.addEventListener('click', () => {
	const input = document.querySelector("input[type=number]").value;
	const message_box = document.querySelector("p");
	console.log(input);

	if (input >= 18){
		message_box.innerText = "You can drink!!!";
	}
	else{
		message_box.innerText = "You are too young";
	}
	
})
