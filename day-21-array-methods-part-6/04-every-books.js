const books = [
    { title: "Atomic Habits", pages: 320 },
    { title: "The Alchemist", pages: 208 },
    { title: "Clean Code", pages: 464 },
    { title: "Deep Work", pages: 304 }
];

const allBooksPgs200 = books.every((book) => {
    return book.pages > 200;
});

console.log(allBooksPgs200);