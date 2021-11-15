const data = [
	{
		name: "John",
		birthday: "1-1-1995",
		favoriteFoods: {
			meats: ["hamburgers", "sausages"],
			fish: ["salmon", "pike"],
		},
	},
	{
		name: "Mark",
		birthday: "10-5-1980",
		favoriteFoods: {
			meats: ["hamburgers", "steak", "lamb"],
			fish: ["tuna", "salmon", "barracuda"],
		},
	},
	{
		name: "Mary",
		birthday: "1-10-1977",
		favoriteFoods: {
			meats: ["ham", "chicken"],
			fish: ["pike"],
		},
	},
	{
		name: "Thomas",
		birthday: "1-10-1990",
		favoriteFoods: {
			meats: ["bird", "rooster"],
			fish: ["salmon"],
		},
	},
	{
		name: "Mary",
		birthday: "1-10-1977",
		favoriteFoods: {
			meats: ["hamburgers", "lamb"],
			fish: ["anchovies", "tuna"],
		},
	},
];


//.1

function getNames(data) {
	return data.map((obj) => {
		return obj.name;
	})
}

// console.log('getNames(data): ', getNames(data));


//.2

function birthYear(string) {
	return Number(string.slice(-4));
}

// console.log('birthYear(string): ', birthYear("1-10-1977"));
// console.log('typeOf(birthYear(string)): ', typeof(birthYear("1-10-1977")));

function bornBefore1990(data) {
	const older = [];
	for (const obj of data) {
		if (birthYear(obj.birthday) < 1990){
			older.push(obj);
		}
	}
	return older;
}

// console.log('bornBefore1990(data): ', bornBefore1990(data));


//.3