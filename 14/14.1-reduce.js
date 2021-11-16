const numbers = [1, -5, 666, 2, 400, 11];

//.1

const max = numbers.reduce((max_val, num) => {
	return max_val < num ? num : max_val;
})

console.log('max value in numbers is: ', max);


//.2

