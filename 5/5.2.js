function mostSpeakers(language) {
    switch (language) {
        case 'mandarin': 
            language += ': MOST number of native speakers!';
            break;
        case 'spanish':
            language += ': 2nd place in number of native speakers';    
            break;
        case 'english':
            language += ': 3rd place';
            break;
        case 'hindi':    
            language += ': Number 4';
            break;
        case 'arabic':     
            language += ': 5th most spoken language';
            break;
        default:
            language += ': Not in the top 5';
            break;
    }
    return language;
}

console.log(mostSpeakers("mandarin"));
console.log(mostSpeakers("spanish"));
console.log(mostSpeakers("english"));
console.log(mostSpeakers("hindi"));
console.log(mostSpeakers("arabic"));
console.log(mostSpeakers("swahili"));