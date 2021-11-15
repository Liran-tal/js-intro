var library = [
	{
		author: "Bill Gates",
		title: "The Road Ahead",
		readingStatus: true
	},
	{
		author: "Steve Jobs",
		title: "Walter Isaacson",
		readingStatus: true
	},
	{
		author: "Suzanne Collins",
		title: "Mockingjay: The Final Book of The Hunger Games",
		readingStatus: false
	}
];

function printReadableBooks(library) {
	for (const book of library) {
		if (book.readingStatus) {
			console.log(book)
		} 
	}
}

printReadableBooks(library) 