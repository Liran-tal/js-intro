/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.

    Submit the file to Hive

*/

// From function declarations to function expressions
function welcomeD() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}

const welcomeE = function () {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}

console.log(welcomeD());
console.log(welcomeE());

// *****************

function powerD(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

const powerE = function (a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

console.log(powerD(2));
console.log(powerE(2));

// *****************

function addD(a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
}

const addE = function (a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
}

console.log(addD(1, 10));
console.log(addE(1, 10));


// From function expressions to function declarations
const helloE = () => "Hello!";

function helloD() {
    return "hello!";
}

console.log(helloE());
console.log(helloD());

// // *****************

const squareRootE = a => Math.sqrt(a);

function squareRootD(a) {
    return (Math.sqrt(a));
}

console.log(squareRootE(4));
console.log(squareRootD(4));



// // *****************

const randomNumbersE = (a, b) => Math.random() * (a - b) + b;

function randomNumbersD(a, b) {
    return (Math.random() * (a - b) + b);
}

console.log(randomNumbersE(50, 100));
console.log(randomNumbersD(50, 100));
