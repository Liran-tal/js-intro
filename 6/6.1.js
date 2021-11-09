const array = [1,7,3,0,-5,7,3,9];

//.1
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}

//.2
function arrayLength(array) {
    let index = 0; 
    while (isNaN(array[index]) != true){
        ++index;
    }
    return index
}

console.log("Length of array: " + arrayLength(array));

//.3
function arraySum(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum;
}

console.log("Sum of array: " + arraySum(array));

//.4
function arrayMulti(array) {
    let product = array[0];
    for (let index = 1; index < array.length; index++) {
        product *= array[index];
    }
    return product;
}

console.log("Product of array: " + arrayMulti(array));