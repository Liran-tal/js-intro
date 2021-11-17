// function calcAverage(arr) {
// 	var sum;
// 	for (var i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 	} return sum;
// }
// calcAverage([85, 90, 92]);

function calcAverage(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	} return sum / arr.length;
}

console.log("calcAverage([85, 90, 92]): ", calcAverage([85, 90, 92]));

//Sum was not initiated at line 10 and was not divided by the number of elements at line 13.

//I used console.log() and the debbuger.