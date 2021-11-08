
// /*
//     JavaScript - Declaring Functions

//     The following exercise contains the following subjects:
//         * functions
    
//     Instructions
//         * Please reformat the following function expressions to IIFE functions.
//         * Please reformat the following function declarations in two ways, explicit return and implicit return functions.

//     Submit the file to Hive

// */

// // From function declarations to explicit and implicit return functions (one of each).
function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
};

let welcomeEx = () => {
    return 'Welcome to Appleseeds Bootcamp!';
}

let welcomeIm = () => 'Welcome to Appleseeds Bootcamp!';


console.log(welcome());
console.log(welcomeEx());
console.log(welcomeIm());

//****************** */

function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

let powerEx = a => {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

let powerIm = a => Math.pow(a, 2);

console.log(power(2));
console.log(powerEx(2));
console.log(powerIm(2));

// // From function expressions to IIFE functions.
const squareRoot = a => Math.sqrt(a);
(function (a = 2){ Math.sqrt(a)})();


const randomNumbers = (a, b) => Math.random() * (a - b) + b;
(function (a = 50, b = -100){ Math.random() * (a - b) + b})();