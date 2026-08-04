const numbers = [5, 12, 8, 20, 3, 15];

const numbersAboveTen = numbers.filter((number) => {
    return number > 10;
});

console.log(numbersAboveTen);