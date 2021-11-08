// let numSiblings = parseInt(prompt('How many siblings do you have?'));
let numSiblings = parseInt(prompt('How many siblings do you have?'));
if (numSiblings === 1){
    console.log("1 sibling!");
}
else if (numSiblings > 1){
    console.log("More than 1 sibling!");
}
else {
    console.log("No sibling!");
}

// '===' checks both value and type of operand while '==' checks only value. 
//      Since in the secound time we compared a number (1) to a string (prompt 
//      return value), the last, defaultive option loged.