const numbers = [12, 45, 7, 89, 34, 56];

let i = 0;
let largestNum = numbers[0];

while (i < numbers.length) {
    if (numbers[i] > largestNum) {
        largestNum = numbers[i];
    }
    i++;
}

console.log(largestNum);