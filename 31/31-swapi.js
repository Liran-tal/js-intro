console.log('31 - SWAPI');

window.addEventListener('load', getSwapiData);

async function getSwapiData () {
	
	try {
		const fetch_response = await fetch(`https://swapi.dev/api/films/1/`);
		// console.log("fetch: ", fetch_response);
		const data = await fetch_response.json();
		if (!fetch_response.ok) {
			throw new Error (`Status: ${fetch_response.status} ${data.message}`);
		}
		// console.log(data);
		extractCharactersData(data);
	} catch (error) {
		
	}
}

async function extractCharactersData(film_data) {
	try {
		const characters_arr = [];
		for (let i = 0; i < 10; ++ i) {
			const character = {};
			const {hair_color: hair, height, name, homeworld: planet_url} = await (await (fetch(film_data.characters[i]))).json();			
			const {name: planetName, population} = await (await fetch(planet_url)).json();
			character.name = name;
			character.hair = hair;
			character.height = height;
			character.planet = {};
			character.planet.name = planetName;
			character.planet.population = population;
			characters_arr.push(character);
			// console.log(character);
		}
		// console.log(characters_arr);
		createTable(film_data, characters_arr);
	} catch (error) {
			
	}
}
	
function createTable(film_data, characters_arr) {
	const main_header = document.createElement('h1');
	main_header.innerText = "STAR WARS";
	const sub_header = document.createElement('h2');
	sub_header.innerText = `Episode ${film_data.episod_id}: ${film_data.title}\nCharacters Table`;
	const table = document.createElement('table');
	table.innerHTML = `
	<tr>
		<th>Name</th>
		<th>Hair</th>
		<th>Height</th>
		<th>Planet Name</th>
		<th>Planet Population</th>
	</tr>`
	characters_arr.forEach(element => {
		table.innerHTML += `<tr>
		<td>${element.name}</td>
		<td>${element.hair}</td>
		<td>${element.height}</td>
		<td>${element.planet.name}</td>
		<td>${element.planet.population}</td>
		</tr>`;
	});
	// document.body.style.backgroundColor = "rgb(0, 0, 0)";
	// document.body.style.Color = "rgb(255, 255, 255)";
	// document.body.style.textAlign = "center";
	// document.body.style.display = "flex";
	// document.body.style.flexDirection = "column";
	// document.body.style.justifyContent = "space-even";
	// document.body.style.alignItems = "center";
	document.body.append(main_header, sub_header, table);
}