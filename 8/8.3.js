//.1
const book1 = {
    name : "Harry Potter and the Goblet of Fire",
    author : "J. K. Rolling",
    year : 2000
};

const book2 = {
    name : "The Hobbit",
    author : "J. R. R. Tolkien",
    year : 1937
};

//.2
const bookUtils = {};

//.3
bookUtils.getFirstPublished = (book1, book2) => {
    return (book1.year < book2.year ? book1 : book2);
}

console.log(bookUtils.getFirstPublished(book1, book2));

//.4
bookUtils.setNewEdition = (book, edition) => {
    book.edition = edition;
    return book;
}

console.log(bookUtils.setNewEdition(book1, '1th'));

//.5
bookUtils.setLanguage = (book, language) => {
    book.language = language;
    return book;
}

console.log(bookUtils.setLanguage(book1, 'English'));

//.6
bookUtils.setTranslation = (book, translator) => {
    book.translator = translator;
    return book;
}

console.log(bookUtils.setTranslation(book1, {translator: 'Gillie Bar-Hilel', language: 'Hebrew'}));

//.7
bookUtils.setPublisher = (book, publisher) => {
    book.publisher = publisher;
    return book;
}

console.log(bookUtils.setPublisher(book1, {name: 'Bloomsbury Publishing plc', location: 'United Kingdom'}));

//.8
bookUtils.isSamePublisher = (book1, book2) => {
    return ((book1.publisher.name === book2.publisher.name) && (book1.publisher.location === book2.publisher.location) ? true : false);
}

bookUtils.setPublisher(book2, {name: 'George Allen & Unwin', location: 'United Kingdom'});

console.log(bookUtils.isSamePublisher(book1, book2));