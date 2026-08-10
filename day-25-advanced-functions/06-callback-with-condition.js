function processNumber(num, func1) {
    let result = func1(num);
    if (result) {
        console.log("Even number");
    } else {
        console.log("Odd number");
    }
}

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

processNumber(24, isEven);