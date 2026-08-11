let message = "Global";

function outer() {
    let message = "Outer";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();
