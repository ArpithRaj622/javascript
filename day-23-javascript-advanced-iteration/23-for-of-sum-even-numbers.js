const numbers = [10, 7, 24, 13, 8, 31, 16, 5];

let sumOfEvenNumbers = 0;

for (let number of numbers) {
    if (number % 2 === 0) {
        sumOfEvenNumbers += number;
    }
}

console.log(sumOfEvenNumbers);