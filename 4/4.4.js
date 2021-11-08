let n = 100;
let is_boom = '';

for (let i = 1; i < n; ++i){
    if ((i % 7) == 0){
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