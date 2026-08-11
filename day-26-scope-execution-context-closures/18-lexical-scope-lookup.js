let role = "Guest";

function outer() {
    let role = "Admin";

    function inner() {
        let message = "Hello";
        console.log(`${message} ${role}`);
    }

    inner();
}

outer();