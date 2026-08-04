const movies = [
    { title: "Inception", rating: 8.8, language: "English" },
    { title: "Kantara", rating: 8.3, language: "Kannada" },
    { title: "KGF", rating: 8.2, language: "Kannada" },
    { title: "The Room", rating: 3.7, language: "English" },
    { title: "Parasite", rating: 8.5, language: "Korean" }
];

const topEnglishMovies = movies.filter((movie) => {
    return movie.language === "English" && movie.rating >= 8.5;
});

console.log(topEnglishMovies);