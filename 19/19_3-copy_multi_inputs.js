// console.log("TEST");

function generateNumCode(length) {
	const code = [];
	for (i = 0; i < length; ++ i){
		code.push(Math.floor(Math.random() * 10));
	}
	return code;
}

// Listen to paste on the document
document.addEventListener("paste", function(event) {
	// if the target is a text input
	if (event.target.type === "text") {
		let data = event.clipboardData.getData('Text');
		// split clipboard text into single characters
		data = data.split('');
		// find all other text inputs
		[].forEach.call(document.querySelectorAll("input[type=text]"), (node, index) => {
			// And set input value to the relative character
			node.value = data[index];
		});
	}
});

function focusNextInput(event) {
	const input = event.target;
	if (input.nextElementSibling && input.value) {
		input.nextElementSibling.focus();
	}
}

function isValid() {
	let input_length = 0;
	
}

// ************************

const input_box = document.querySelector('.input-box');
console.log(input_box);
const inputs = document.querySelectorAll('.input-field input');
console.log(inputs);
const input_btn = document.querySelectorAll('.input-box input[type=button]');
const code_display = document.querySelector('h1');
const code = generateNumCode(6);

code_display.innerText = code.join('');
input_box.addEventListener('input', focusNextInput);
// console.log(input_length);



// const input_value = Array(6);
// inputs.forEach((input, index) => {
	// console.log(input, ' ', index);
// 	input.addEventListener('', () => {
// 		input_value[index] = input.value;
// 	})
// })

// console.log(input_value);
// input_btn.addEventListener('click', )

