const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

function compareArrays(array1, array2) {
	const inclusive_array = [];
	let shorter = [];
	let longer = [];

	if (array1.length > array2.length){
		shorter = array2;
		longer = array1;
	} else{
		shorter = array1;
		longer = array2;
	}

	// Implement includes()?
	for (let i = 0; i < shorter.length; ++i){
		for (let j = 0; j < longer.length; ++j){
			if (shorter[i].localeCompare(longer[j]) === 0) {
				inclusive_array.push(shorter[i]);
			}
		}
	}
	return (inclusive_array.length > 0 ? inclusive_array : false);
}

console.log("inclusive_array: ", compareArrays(food1, food2));