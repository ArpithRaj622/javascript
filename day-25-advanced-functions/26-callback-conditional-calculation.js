const numbers = [10, 15, 20, 25, 30];

function processNumbers(numbers, calculateValue) {
    numbers.forEach((number) => {
        console.log(calculateValue(number));
    });
}

function calculateValue(number) {
    if (number % 2 === 0) {
        return number * 2;
    } else {
        return number * 3;
    }
}

processNumbers(numbers, calculateValue);