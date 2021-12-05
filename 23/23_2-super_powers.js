// const storm = {
// 	// add code here
// 	}
// 	function printSuperPower() {
// 	console.log("my superpower is " + this.superPower);
// 	}

const storm = {
	superPower: 'flying',
	
	printSuperPower() {
		console.log("my superpower is " + this.superPower);
	}
}

storm.printSuperPower()