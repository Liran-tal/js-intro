const population = [79, 7.9, 790, 0.79];

function populationPercentages(population) {
    const percentages = [];
    for (let index = 0; index < population.length; index++) {
        percentages[index] = (population[index] * 100 / 7900);
    }
    return percentages;
}
console.log(populationPercentages(population));