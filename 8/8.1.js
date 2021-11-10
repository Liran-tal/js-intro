const aBook = {
    book_name : "Wyrd Sisters",
    author : "Terry Pratchett",
    publish_year : 1988,
    publisher : "Corgi",
};

function ilan(book) {
    return `The book ${book.book_name} was written by ${book.author} in the year ${book.publish_year}`;
}

console.log(ilan(aBook));