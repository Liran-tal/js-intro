function isLeap(year) {
    // let leap = false;
    if ((year % 4) == 0){
        if (((year % 100) != 0) || ((year % 400) == 0)) {
            return "It is indeed a leap year";
        }
    }

    return "This is not a leap year";
}

let year = 2012;
console.log(`-Is ${year} a leap year? \n-${isLeap(year)}\n`);

year = 2100;
console.log(`-Is ${year} a leap year? \n-${isLeap(year)}\n`);

year = 2400;
console.log(`-Is ${year} a leap year? \n-${isLeap(year)}\n`);