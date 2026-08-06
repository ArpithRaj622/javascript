const movies = [
    { title: "Inception", rating: 8.8 },
    { title: "Avatar", rating: 7.9 },
    { title: "Interstellar", rating: 8.6 },
    { title: "Joker", rating: 8.4 }
];

const allMovies7Plus = movies.every((movie) => {
    return movie.rating > 7;
});

console.log(allMovies7Plus);