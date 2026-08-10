const numbers = [5, 12, 18, 7, 25, 30];

function processNumbers(numbers, processNumber) {
    numbers.forEach((number) => {
        let result = processNumber(number);
        console.log(result);
    });
}

function processNumber(number) {
    if (number % 2 === 0) {
        return `Even: ${number}`;
    } else {
        return `Odd: ${number}`;
    }
}

processNumbers(numbers, processNumber);