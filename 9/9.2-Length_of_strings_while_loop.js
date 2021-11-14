const array_of_strings = ["boo", "doooo", "hoo","ro"];

function lengthOfStrings(array) {
	let i = 0;
	const res_arr = [];
	while (i < array.length) {
		res_arr.push(array[i].length);
		++ i;
	}
	return res_arr
}

console.log("lengthOfStrings(array_of_strings): ", lengthOfStrings(array_of_strings)); // -> [3, 5, 3, 2]