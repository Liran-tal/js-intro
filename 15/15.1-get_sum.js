// function getSum(arr1, arr2) {
// 	const sum = 0;
// 	for (let i = 0; i < arr1.length; i++) {
// 		sum += arr1[i];
// 	}
// 	for (let i = 0; i < arr2.length; i++) {
// 		sum += arr2[i];
// 	}
// }
// getSum([1, 2, 3][5, 66, 23]);

function getSum(arr1, arr2) {
	let sum = 0;
	for (let i = 0; i < arr1.length; i++) {
		sum += arr1[i];
	}
	for (let i = 0; i < arr2.length; i++) {
		sum += arr2[i];
	}
	return sum;
}
console.log(getSum([1, 2, 3], [5, 66, 23]));

//.1
//TypeError: Cannot read properties of undefined (reading 'length')
// at getSum (c:\Users\Liran Tal\Documents\School\Git\js-intro\15\15.1-get_sum. js:3:27)

// TypeError: Assignment to constant variable.
//     at getSum (c:\Users\Liran Tal\Documents\School\Git\js-intro\15\15.1-get_sum.js:4:7)

//.2
//VScode built-in js debbuger.

//.3