const numbers = [-5, 12, -3, 8, 0, 15, -7, 20];

let positiveNumCount = 0;

for (let number of numbers) {
    if (number > 0) {
        positiveNumCount++;
    }
}

console.log(positiveNumCount);