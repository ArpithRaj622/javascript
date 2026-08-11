function createCounter() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

let counter1 = createCounter();
let counter2 = createCounter();

counter1();
counter1();

counter2();

counter1();