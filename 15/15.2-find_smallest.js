// function findSmallest(a, b, c) {
// 	if (a > b > c) {
// 		return c;
// 	} else if (a > c > b) {
// 		return a;
// 	} else {
// 		return b;
// 	}
// }
// findSmalest(52, 66, 2);

function findSmallest(a, b, c) {
	if (a > c && b > c) {
		return c;
	} else if (a < b && a < c) {
		return a;
	} else {
		return b;
	}
}
console.log("findSmallest(52, 66, 2): ", findSmallest(52, 66, 2));
console.log("findSmallest(2, 66, 52): ", findSmallest(2, 66, 52));
console.log("findSmallest(52, 2, 66): ", findSmallest(52, 2, 66));

//.1
// ReferenceError: findSmalest is not defined
//at Object.<anonymous> (c:\Users\Liran_Tal\Documents\School\Git\js-intro\15\15.2-find_smallest.js:21:1)
//Thier was a typo in the function name where it was called.

//Another error is in the set conditions: since they are set as to return 'b' unless 'a' is the biggest and does not support varried conditions.

//.2
//To debbug this function I started with console.log() and than used the debbuger.
