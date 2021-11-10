function reverseEntries(obj) {
	const array = Object.entries(obj);
	for (let index = 0; index < array.length; index++) {
		array[index].reverse();
	}
	return Object.fromEntries(array);
}

// function reverseEntries(obj) {
// 	const revObj = {};
// 	for (let key in obj) {
// 		revObj[obj[key]] = key
// 	}
// 	return revObj;
// }



const obj = {1:'a', 2:'b', 3:'c', 4:'d'};

console.log("obj before reverseEntries()",  obj);
console.log("obj after reverseEntries()",  reverseEntries(obj));


