function countryToLiveIn(language, isIsland, population, country) {
    if ((isIsland === false) && 
        (language === "English") && 
        (population <= 50)) {
        return ("You should live in " + country);
    }
    return (country + " does not meet your criteria")
}
// Meets criteria
console.log(countryToLiveIn("English", false, 30, "Guyana"));

//Does not meet criteria
console.log(countryToLiveIn("Hebrew", false, 8, "Israel"));
console.log(countryToLiveIn("English", false, 329, "USA"));
console.log(countryToLiveIn("English", true, 0.5, "Malta"));