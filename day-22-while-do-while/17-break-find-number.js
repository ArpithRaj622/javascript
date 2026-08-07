const numbers = [12, 7, 25, 18, 30, 9, 42];

let i = 0;

while (i < numbers.length) {
    if (numbers[i] === 30) {
        console.log("Found");
        break;
    }
    i++;
}