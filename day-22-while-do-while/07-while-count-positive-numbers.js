const numbers = [5, -2, 8, -1, 10, -7, 3];
let i = 0;
let count = 0;

while (i < numbers.length) {
    if (numbers[i] > 0) {
        count++;
    }
    i++;
}

console.log(count);