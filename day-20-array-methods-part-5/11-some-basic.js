const numbers = [5, 12, 8, 20, 3, 15];

const hasNumberAboveTen = numbers.some((number) => {
    return number > 10;
});

console.log(hasNumberAboveTen);