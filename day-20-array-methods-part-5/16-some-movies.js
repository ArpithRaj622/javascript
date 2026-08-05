const movies = [
    { title: "Inception", rating: 8.8 },
    { title: "Avatar", rating: 7.9 },
    { title: "Interstellar", rating: 8.6 },
    { title: "Joker", rating: 8.4 }
];

const hasratingBelow8 = movies.some((movie) => {
    return movie.rating < 8;
});

console.log(hasratingBelow8);