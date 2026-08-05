const books = [
    { title: "Atomic Habits", price: 699 },
    { title: "The Alchemist", price: 499 },
    { title: "Clean Code", price: 899 },
    { title: "Deep Work", price: 749 }
];

const bookPriceAbove800 = books.some((book) => {
    return book.price > 800;
});

console.log(bookPriceAbove800);