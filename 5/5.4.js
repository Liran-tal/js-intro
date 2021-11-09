function darkOrLight(colour) {
    colour = colour.toLowerCase();
    switch (colour) {
        case 'yellow':
        case 'pink':
        case 'orange':
            return "Light colour";
        case 'blue':
        case 'purple':
        case 'brown':
            return "Dark colour";
        default:
            return "Unknown colour";
    }
}

//Light
console.log(darkOrLight("yellow"));
console.log(darkOrLight("pink"));
console.log(darkOrLight("Orange"));
//Dark
console.log(darkOrLight("Blue"));
console.log(darkOrLight("PURPLE"));
console.log(darkOrLight("brown"));
//Unknown
console.log(darkOrLight("cyan"));