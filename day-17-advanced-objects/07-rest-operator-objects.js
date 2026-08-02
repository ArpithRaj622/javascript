const laptop = {
    brand : "Lenovo",
    model : "LOQ",
    processor : "i7-13645HX",
    ram : "16GB",
    storage : "512GB"
};

const {brand, ...specs} = laptop;

console.log(brand);
console.log(specs);