const testResolve = ['one', 'two', 'three', 'four'];
const testReject = ['one', 2, 'three', 'four'];


function makeAllCaps(str_arr) {
	return new Promise((resolve, reject) => {
		const caps_arr = str_arr.reduce((arr, elm) => {
			if (typeof(elm) === 'string'){
				arr.push(elm.toUpperCase());
			}
			return arr
		}, []);
		
		if (caps_arr.length === str_arr.length) {
			resolve(caps_arr);
		}
		else {
			reject('List contains data types other than strings');
		}
	})
};

function sortWords(array) {
	return array.sort();
};


makeAllCaps(testResolve)
	.then((array) => {
		console.log(sortWords(array));
	})
	.catch((err) => {
		console.log(err);
	})

makeAllCaps(testReject)
	.then((array) => {
		console.log(sortWords(array));
	})
	.catch((err) => {
		console.log(err);
	})