const books = [
    { title: "Atomic Habits", price: 699 },
    { title: "The Alchemist", price: 499 },
    { title: "Clean Code", price: 899 },
    { title: "Deep Work", price: 749 }
];

const allPriceMoreThan400 = books.every((book) => {
    return book.price > 400;
});

console.log(allPriceMoreThan400);