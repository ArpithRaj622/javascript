const numbers = [12, 7, 25, 18, 30, 9, 42];

function filterNumbers(numbers, isEven) {
    numbers.forEach((number) => {
        let even = isEven(number);
        if (even) {
            console.log(number);
        }
    });
}

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

filterNumbers(numbers, isEven);