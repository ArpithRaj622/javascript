const movies = [
    { title: "Inception", rating: 8.8 },
    { title: "Avatar", rating: 7.9 },
    { title: "Interstellar", rating: 8.6 },
    { title: "Joker", rating: 8.4 }
];

const amazingMovie = movies.find((movie) => {
    return movie.rating > 8.5;
});

console.log(amazingMovie);