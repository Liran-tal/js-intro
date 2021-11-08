let n = 100;
let is_boom = '';

for (let i = 1; i < n; ++i){
    if ((i % 7) == 0){
        // String() turns the type of i to a string, which is iterable, and 
        //  includes() searches for the char '7' within that string.
        if (String(i).includes('7') == true ) {
            is_boom = 'boom boom';
        }
        else{
            is_boom = "boom";
        }
        console.log(is_boom);
        continue;
    }
    console.log(i);
}