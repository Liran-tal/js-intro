const int_array = [-1, 0, 1];
const rand_list = [true, 'first', 42, -3, 'secound', 'third', 10];
const test_string = "Hello from string";

// //.1
// function doubleValues(array) {
// 	const doubles = array.map((val) => {
// 		return val * 2;
// 	});
// 	return doubles
// }

// console.log("doubleValues(int_array): ", doubleValues(int_array));

// //.2
// function onlyEvenValues(array) {
// 	const Ivans = [];
// 	array.forEach(val => {
// 		if (val % 2 === 0){
// 			Ivans.push(val);
// 		}
// 	});
// 	return Ivans
// }

// console.log("onlyEvenValues(int_array): ", onlyEvenValues(int_array));


// //.3
// function showFirstAndLast(list) {
// 	const first_last = [];
// 	list.forEach(val => {
// 		if (typeof(val) === 'string'){
// 			first_last.push(
// 				val.charAt(0) + val.charAt(val.length - 1)
// 			);
// 		}
// 	});
// 	return first_last;
// }

// console.log("showFirstAndLast(rand_list): ", showFirstAndLast(rand_list));


//.4
// function vowelCount(string) {
// 	const lowered_string = string.toLowerCase().split('');
// 	const vowels = {};
// 	for (const char of string) {
// 		if ("aeiou".includes(char)) {
// 			if ([char] in vowels) {
// 				++ vowels[char];
// 			} else{
// 				vowels[char] = 1;
// 			}
// 		}
// 	}
// 	return vowels;
// }

// console.log('vowelCount(test_string): ', vowelCount(test_string));


//.5
function capitalize(string) {
	return string.toUpperCase();
}

// console.log("capitalize(test_string): ", capitalize(test_string));


//.6
// function shiftLetters(string) {
// 	const shifted = string.split('').map((char) => {
// 		if (/[a-zA-Z]/.test(char)) {
// 			return String.fromCharCode(char.charCodeAt() - 1);	
// 		}
// 		return char;
// 	});

// 	return shifted.join('');
// }

// console.log('shiftLetters(test_string): ', shiftLetters(test_string));


//.7
function swapCase(string) {
	const word_array = string.split(' ');
	let even = true;
	const new_str = word_array.map((word) => {
		if (even) {
			even = false;
			return (capitalize(word));
		}
		even = true;
		return word;
	});
	return new_str.join(' ');
}

console.log('swapCase(test_string): ', swapCase(test_string));