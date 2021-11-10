const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function countLetters(array) {
    const histogram = {};
    const abc = "abcdefghijklmnopqrstuvwxyz";
    max = 0;
    for (let index = 0; index < array.length; index++) {
        array[index].split('').forEach(letter => {
            letter = letter.toLowerCase();
            // Checks if a letter exist in histogram 
            if (abc.includes(letter) == true) {    
                (letter in histogram) == true
                    ? ++histogram[letter] 
                    : histogram[letter] = 1;
                // Compare letter count to max. Record larger.
                if (histogram[letter] > max){  
                    max = histogram[letter];
                }
            }
        });
    }
    // Function to find the key with max occurences
    histogram.max = getKeyByValue(histogram, max)
    return histogram;
}

function getKeyByValue(object, value) {
    // Object.keys() : makes array from (only) the keys of the target object
    // find() : return the first array element that passes a test
    // The function creates an array from the objects keys so we can use find() on it. 
    // find() than matches each index (key) as one might find value with key:value pair,
    // but returns a key as this are its parameters.
    return Object.keys(object).find(key => object[key] === value);
}

console.log(countLetters(array));