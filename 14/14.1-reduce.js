const numbers = [1, -5, 666, 2, 400, 11];

//.1

const max = numbers.reduce((max_val, num) => {
	return max_val < num ? num : max_val;
})

// console.log('max value in numbers is: ', max);


//.2

function sum_of_even (array){
	let sum = array.reduce((sum, num) => {
		return (num % 2 === 0) ? sum += num : sum;
	}, 0);
	
	return sum
}
// console.log('sum value of even numbers in numbers is: ', sum_of_even(numbers));


//.3
function calcAvg(array) {
	let avg = array.reduce((avg, num) => {
		return avg + num;
	}, 0);
	return avg / array.length
}

console.log('Average value of numbers in numbers is: ', calcAvg([1, 2, 3, 4]));