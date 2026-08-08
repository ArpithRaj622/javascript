const numbers = [35, 12, 48, 7, 29, 16, 41];

let smallestNum = numbers[0];

for (let number of numbers) {
    if (number < smallestNum) {
        smallestNum = number;
    }
}

console.log(smallestNum);