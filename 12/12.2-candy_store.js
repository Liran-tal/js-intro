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

function getCandy(candyStore, id){
	const result = candyStore.candies.filter((elm) => {
		if (elm.id === id){
			return elm
		}
	})
	return result[0];
}

console.log('getCandy(candyStore, "5hd7y"); ', getCandy(candyStore, "5hd7y"));
console.log('getCandy(candyStore, "55555"); ', getCandy(candyStore, "55555"));