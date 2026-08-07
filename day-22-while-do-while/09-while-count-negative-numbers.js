const numbers = [5, -2, 8, -1, 10, -7, 3, -4];

let i = 0;
let negativeNumCount = 0;

while (i < numbers.length) {
    if (numbers[i] < 0) {
        negativeNumCount++;
    }
    i++;
}

console.log(negativeNumCount);