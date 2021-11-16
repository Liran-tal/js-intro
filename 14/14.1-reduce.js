const numbers = [1, -5, 666, 2, 400, 11];

//.1

const max = numbers.reduce((max_val, num) => {
	return max_val < num ? num : max_val;
})

// console.log('max value in numbers is: ', max);


//.2

function sum_of_even (array){
	let sum = numbers.reduce((sum, num) => {
		return (num % 2 === 0) ? sum += num : sum;
	});
	
	return numbers[0] % 2 !== 0 ? sum - numbers[0] : sum; 
}
console.log('sum value of even numbers in numbers is: ', sum_of_even(numbers));


//.3
