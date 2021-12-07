function isGreaterThan10(num) {
	return new Promise((resolve, reject) => {
		if (num > 10) {
			resolve();
		}
		else {
			reject();
		}
	})
}


isGreaterThan10(Math.floor(Math.random() * 20 + 1))
	.then(() => {
		console.log('Resolved');
	})
	.catch(() => {
		console.log('Rejected');
	})