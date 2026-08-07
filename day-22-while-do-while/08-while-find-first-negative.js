const numbers = [8, 12, 15, -4, 20, -7, 10];

let i = 0;
let firstNegative;

while (i < numbers.length) {
    if (numbers[i] < 0) {
        firstNegative = numbers[i];
        break;
    } 
    i++;
}

console.log(firstNegative);