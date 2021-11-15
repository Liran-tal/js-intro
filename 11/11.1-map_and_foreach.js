const newReleases = [
	{
	id: 70111470,
	title: "Die Hard",
	boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
	uri: "http://api.netflix.com/catalog/titles/movies/70111470",
	rating: [4.0],
	bookmark: [],
	},
	{
	id: 654356453,
	title: "Bad Boys",
	boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
	uri: "http://api.netflix.com/catalog/titles/movies/70111470",
	rating: [5.0],
	bookmark: [{ id: 432534, time: 65876586 }],
	},
	{
	id: 65432445,
	title: "The Chamber",
	boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
	uri: "http://api.netflix.com/catalog/titles/movies/70111470",
	rating: [4.0],
	bookmark: [],
	},
	{
	id: 675465,
	title: "Fracture",
	boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
	uri: "http://api.netflix.com/catalog/titles/movies/70111470",
	rating: [5.0],
	bookmark: [{ id: 432534, time: 65876586 }],
	},
];


function forEachMovie(movies_array) {
	const name_id = [];
	movies_array.forEach(movie => {
		name_id.push({title: movie.title, id: movie.id});
	});

	return name_id;
}

console.log("forEachMovie(newReleases): ", forEachMovie(newReleases));


function mapMovie(movies_array) {
	const name_id = movies_array.map((movie) => {
		return (
		{
			title: movie.title, 
			id: movie.id
		});
	});

	return name_id;
}

console.log("mapMovie(newReleases): ", mapMovie(newReleases));