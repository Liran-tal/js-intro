"use strict";

console.log("*** 23.4 - Stop Watch ***");

const timer = {
	time: document.querySelector('h1'),
	buttons: document.querySelector('.buttons-container'),
	record: document.querySelector('.record'),
	time_string: '', 
	min: 0, 
	sec: 0, 
	mili: 0,

	setAttr(attr, value) {
		this[attr] = value;
	},
	
	getAttr(attr) {
		return this[attr];
	},

	setTimeString() {
		const { 
		min, 
		sec, 
		mili,
		checkTime} = this;
		this.time_string = `${checkTime(min)} : ${checkTime(sec)} : ${checkTime(mili) / 10}`;
	},

	checkTime(setting) {
		if (setting < 10) {
			setting = "0" + setting;
		}; 
		return setting;
	},

	resetTimer() {
		this.mili = 0;
		this.sec = 0;
		this.min = 0;
		this.time_string = '00 : 00 : 00';
		this.record.innerContent = '';
		this.time.innerText = this.time_string;
	}
	
}

let intervalID;
timer.buttons.addEventListener('click', ({target}) => {
	switch (target.innerText) {
		case 'Start':
			target.innerText = 'Stop';
			intervalID = setInterval(runTimer, 10);
			break;
		case 'Stop':
			clearInterval(intervalID);
			target.innerText = 'Start';
			break;
		case 'Lap':
			recordLap();
			break;
		case 'Reset':
			clearInterval(intervalID);
			timer.resetTimer();
			timer.record.classList.add('hide');
	}
})


function Count() {
	let mili = timer.getAttr('mili') + 10;
	let sec = timer.getAttr('sec');
	let min = timer.getAttr('min');

	if (mili > 999){
		++ sec;
		mili = 0;
	}
	if (sec > 59) {
		++ min;
		sec = 0;
	}
	timer.setAttr('mili', mili);
	timer.setAttr('sec', sec);
	timer.setAttr('min', min);
}

function runTimer() {
	if (timer.getAttr('min') < 60) {
		Count();
		timer.setTimeString();	
		timer.time.innerText = timer.getAttr('time_string');
	}
}


function recordLap(params) {
	timer.record.classList.remove('hide')
	if (timer.record.children.length < 20) {
		timer.record.innerHTML += `<p>${timer.time_string}</p>`
	}
}