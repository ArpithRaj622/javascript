const books = [
    { title: "Atomic Habits", pages: 320 },
    { title: "The Alchemist", pages: 208 },
    { title: "Clean Code", pages: 464 },
    { title: "Deep Work", pages: 304 }
];

const bookWithMostPages = books.reduce((highestPages, book) => {
    return book.pages > highestPages.pages ? book : highestPages;
}, books[0]);

console.log(bookWithMostPages);


