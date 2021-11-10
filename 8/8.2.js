const myCountry = {
    country: "Israel",
    capital: "Jerusalem",
    language: "Hebrew",
    population: 8,
    neighbours: ['Lebanon', 'Syria', 'Jordan', 'Egypt'],
}

myCountry.describe = function () {
    const {
        country,
        capital,
        language,
        population,
        neighbours
    } = this;
    console.log(`${country} has ${population} million people, their mother tongue is ${language}, they have ${neighbours.length} neighbouring countries and a capital called ${capital}`);
}

myCountry.describe();

myCountry.checkIsland = function () {
    return (this.neighbours.length === 0 ? true : false);    
}

console.log(`Is ${myCountry.country} an island? `, myCountry.checkIsland());

myCountry.neighbours.splice(0, 4);
console.log(`Is ${myCountry.country} an island? `, myCountry.checkIsland());