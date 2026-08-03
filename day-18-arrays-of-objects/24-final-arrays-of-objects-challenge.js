const books = [
    {
        title : "Atomic Habits",
        author : "James Clear",
        price : 699,
        pages : 320
    },
    {
        title : "The Alchemist",
        author : "Paulo Coelho",
        price : 499,
        pages : 208
    },
    {
        title : "Clean Code",
        author : "Robert C. Martin",
        price : 899,
        pages : 464
    },
    {
        title : "Deep Work",
        author : "Cal Newport",
        price : 749,
        pages : 304
    },
    {
        title : "Rich Dad Poor Dad",
        author : "Robert Kiyosaki",
        price : 599,
        pages : 336
    },
    
];

let mostExpensiveBook = books[0];
let cheapestBook = books[0];
let totalPriceOFBooks = 0;
let plus300PagesBooks = 0;
let authorToSearch = "Robert Kiyosaki";
let searchByAuthor = books[0];

for (const book of books) {
    if (book.price > mostExpensiveBook.price) {
        mostExpensiveBook = book;
    }
    if (book.price < cheapestBook.price) {
        cheapestBook = book;
    }
    totalPriceOFBooks += book.price;

    if (book.pages > 300) {
        plus300PagesBooks++;
    }
    if (book.author === authorToSearch) {
        searchByAuthor = book;
    }
}

console.log(`Most expensive Book:
Title: ${mostExpensiveBook.title}
Price: ${mostExpensiveBook.price}
`);

console.log(`Cheapest Book:
Title: ${cheapestBook.title}
Price: ${cheapestBook.price}
`);

console.log(`Average Price of all Books: ${totalPriceOFBooks/books.length}
`);

console.log(`Books with more than 300 pages: ${plus300PagesBooks}
`);

console.log(`Book by ${authorToSearch}: ${searchByAuthor.title} `);