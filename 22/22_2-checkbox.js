"use strict";
console.log("*** 22.2 ***");

const checkbox = document.querySelector('.checkbox');
const img = document.querySelector('img');
const checkbox_label = document.querySelector('.checkbox-label');
console.log(checkbox_label);

checkbox.addEventListener("change", () => {
	img.classList.toggle('img-invisible');
	if (checkbox.checked) {
		console.log("checked");
		checkbox_label.innerText = "Uncheck to make image disappear";
	}else {
		checkbox_label.innerText = "Check to make an image appear";
	}
	
})