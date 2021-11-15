const candyStore = {
	candies: [
		{
			name: "mint gum",
			id: "as12f",
			price: 2,
			amount: 2
		},
		{
			name: "twix",
			id: "5hd7y",
			price: 5,
			amount: 4
		},
	],
	cashRegister: 200
}


//.1
function getCandy(candyStore, id){
	const result = candyStore.candies.filter((elm) => {
		if (elm.id === id){
			return elm
		}
	})
	return result[0];
}

// console.log('getCandy(candyStore, "5hd7y"); ', getCandy(candyStore, "5hd7y"));
// console.log('getCandy(candyStore, "55555"); ', getCandy(candyStore, "55555"));


//.2
function getPrice(candyStore, id){
	const result = candyStore.candies.filter((elm) => {
		if (elm.id === id){
			return elm
		}
	})
	return (result[0] ? result[0].price : undefined);
}

console.log('getPrice(candyStore, "5hd7y"); ', getPrice(candyStore, "5hd7y"));
console.log('getPrice(candyStore, "55555"); ', getPrice(candyStore, "55555"));