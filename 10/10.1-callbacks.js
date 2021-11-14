//.1
const str = "hello world !"

function isString(str, callbackFn) {
	if (typeof(str) === 'string'){
		callbackFn(str);
	}	
}

callbackFn1 = (string) => {
	console.log("isString(str, callbackFn1): ", string);
}

isString(str, callbackFn1);


//.2
function firstWordUpperCase(str, callbackFn) {
	let capital_str = str.charAt(0).toUpperCase() + str.slice(1);

	// console.log(capital_str);
	return callbackFn(capital_str);
}

callbackFn2 = (string) => {
	return string.replace(/\s/g, '-');
}

console.log("firstWordUpperCase('hello wold!', callbackFn2): ", firstWordUpperCase(str, callbackFn2));


//.3
//	The callback function reverses the argument string. Because why not...
callbackFn3 = (string) => {
	const word_arr = string.split(' ');
	return word_arr.reverse().join(' ');
}

console.log("firstWordUpperCase('hello wold!', callbackFn3): ", firstWordUpperCase(str, callbackFn3));


//.4 
//The function takes as arguments 2 numbers and a callback function and 
//returns an array os the results of an action on the range of integers between //those numbers. Or somthing.
function deduce(num1, num2, callbackFn4) {
	const arr = [];
	for (let i = num1; i < num2; ++i){
		arr.push(callbackFn4(num1 + i, num2));
	}
	return arr;
}

callbackFn4 = (num1, num2) => {
	return num1 / num2;
}

console.log("deduce(num1, num2, callbackFn4): ", deduce(5, 15, callbackFn4))