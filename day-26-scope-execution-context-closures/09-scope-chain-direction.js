function outer() {
    let x = 10;

    function inner() {
        console.log(x);
    }

    inner();
}

outer();

// console.log(x); ReferenceError: x is not defined