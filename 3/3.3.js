function percentageOfWorld1(population) {
    const world = 7900;
    return (population * 100 / world);
}

console.log(percentageOfWorld1(1441));
console.log(percentageOfWorld1(79));
console.log(percentageOfWorld1(790));

let percentageOfWorld2 = (population) => (population * 100 / 7900);

console.log(percentageOfWorld1(1441));
console.log(percentageOfWorld1(79));
console.log(percentageOfWorld1(790));
