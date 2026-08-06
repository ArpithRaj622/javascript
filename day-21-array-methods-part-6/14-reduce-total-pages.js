const books = [
    { title: "Atomic Habits", pages: 320 },
    { title: "The Alchemist", pages: 208 },
    { title: "Clean Code", pages: 464 },
    { title: "Deep Work", pages: 304 }
];

const allBookPgsAddUp = books.reduce((total, book) => {
    return total + book.pages;
}, 0);

console.log(allBookPgsAddUp);