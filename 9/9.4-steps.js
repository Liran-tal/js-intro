function steps(num) {
	for (let i = 1; i <= num; i++) {
		let str = '';
		for (let j = 1; j <= num; j++) {
			str += (j <= i ? '#' : ' ');
		}
		console.log(str);
	}
}

steps(0);
steps(1);
steps(5);
steps(10);