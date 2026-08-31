const message = "Global";

function test() {
    const message = "Local";
    console.log(message);
}

test();

console.log(message);