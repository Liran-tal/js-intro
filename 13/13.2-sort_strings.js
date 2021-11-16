const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

//.1
const ascending = foods.slice().sort();

const descending = foods.slice().sort((a, b) => {
	if (a > b) {
		return -1;
	}
	if (a < b) {
		return 1;
	}
	return 0;
});

// console.log(ascending);
// console.log(descending);

//.2

const foodsWithUpperCase = [
	"falafel",
	"Sabich",
	"hummus",
	"pizza with extra pineapple",
];

const descendingWithUpperCase = foodsWithUpperCase.slice().sort((a, b) => {
    let lower_a = a.toLocaleLowerCase();
    let lower_b = b.toLocaleLowerCase();

	if (lower_a > lower_b){
        return -1;
	}
    if (lower_a < lower_b){
        return 1;
	}
    return 0;
});

const ascendingWithUpperCase = foodsWithUpperCase.slice().sort((a, b) => {
	let lower_a = a.toLocaleLowerCase();
	let lower_b = b.toLocaleLowerCase();

	if (lower_a < lower_b) {
		return -1;
	}
	if (lower_a > lower_b) {
		return 1;
	}
	return 0;
});

// console.log(ascendingWithUpperCase);
// console.log(descendingWithUpperCase);


//.3
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

const descendingByLength = words.slice().sort((a, b) => {
    let lower_a = a.length;
    let lower_b = b.length;

	if (lower_a > lower_b){
        return -1;
	}
    if (lower_a < lower_b){
        return 1;
	}
    return 0;
});

console.log(descendingByLength)