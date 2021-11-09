function lengthOfStrings(arr) {
    const array_of_lengths = [];
    for (let index = 0; index < arr.length; index++) {
        array_of_lengths[index] = arr[index].length;
    }
    return array_of_lengths;
}
console.log(["boo", "doooo", "hoo","ro"]);
console.log(lengthOfStrings(["boo", "doooo", "hoo","ro"]));