const numbers = [5, 10, 15, 20];

const numMoreThan0 = numbers.every((number) => {
    return number > 0;
});

console.log(numMoreThan0);