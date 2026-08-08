const numbers = [18, 42, 7, 91, 35, 64, 12];

let largestNum = numbers[0];

for (let number of numbers) {
    if (number > largestNum) {
        largestNum = number;
    }
}

console.log(largestNum);