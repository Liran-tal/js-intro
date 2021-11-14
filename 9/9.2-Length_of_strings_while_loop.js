// With 6.3

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


// With 6.4

const population = [79, 7.9, 790, 0.79];

function populationPercentages(population) {
	let index = 0;
    const percentages = [];
    while (index < population.length) {
        percentages[index] = (population[index] * 100 / 7900);
		++ index;
     }
    return percentages;
}
console.log(populationPercentages(population));