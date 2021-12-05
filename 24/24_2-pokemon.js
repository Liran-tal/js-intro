function Pokemon(pokemonName, pokemonType, pokemonAttackList){
	this.name = pokemonName;
	this.type = pokemonType;
	this.attackList = pokemonAttackList;
}

const gengar = new Pokemon('Gengar', 'Ghost', ['Spite', 'Lick', 'Hypnosis', 'Shadow Ball']);
const bayleef = new Pokemon('Bayleef', 'Grass', ['Razor Leaf', 'Solar Beam', 'Body Slam', 'Synthesis']);
const ampharos = new Pokemon('Ampharos', 'Electric', ['Thunder Punch', 'Thunder Shock', 'Cotton Spore', 'Thunder Wave']);

Pokemon.prototype.callPokemon = function () {
	console.log(`I choose you, ${this.pokemonName}`);
};


Pokemon.prototype.attack = function (atk_num) {
	console.log(`${this.pokemonName} used ${this.pokemonAttackList[atk_num]}`);
}

console.log('Gengar:');
gengar.callPokemon();
gengar.attack(1);

console.log('Bayleef:');
bayleef.callPokemon();
bayleef.attack(2);

console.log('Ampharos:');
ampharos.callPokemon();
ampharos.attack(3);