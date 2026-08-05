const books = [
    { title: "Atomic Habits", pages: 320 },
    { title: "The Alchemist", pages: 208 },
    { title: "Clean Code", pages: 464 },
    { title: "Deep Work", pages: 304 }
];

const bookpages400 = books.find((book) => {
    return book.pages > 400;
});

console.log(bookpages400);