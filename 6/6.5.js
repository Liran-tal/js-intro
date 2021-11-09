//.1

const arr_fill = new Array(100).fill(0);
console.log(arr_fill);

//.2
const arr_to_100 = Array.from(Array(100).keys());
console.log(arr_to_100);

//.3
const obj = {
    a: 1,
    b: 2,
    c: 3
};
let arr = Object.values(obj);
console.log(arr)

//.4
console.log(Object.assign({}, arr));

//.5
console.log(Array.isArray(arr));
console.log(Array.isArray(obj));

//.6
//Changes doesn't affects source
//Shallow copy - by reference
const copy1 = [...arr];
console.log(arr, copy1);
copy1[1] = 6;
console.log(arr, copy1);


//Changes doesn't affects source
const copy2 = arr;
console.log(arr, copy2);
copy2[1] = 6;
console.log(arr, copy2);