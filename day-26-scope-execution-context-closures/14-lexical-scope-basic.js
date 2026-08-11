let message = "hello";

function outer() {
    let message = "hi";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();