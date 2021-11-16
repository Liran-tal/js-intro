const numbers = [1, -5, 666, 2, 400, 11];

const ascending = numbers.slice().sort((a, b) => {
	return (a - b);
});

const decending = numbers.slice().sort((a, b) => {
	return (b - a)
});

console.log(ascending);
console.log(decending);