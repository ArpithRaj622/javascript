function createGreeting() {
    let message = "Hello, Arpith";

    function inner() {
        console.log(message);
    }

    return inner;
}

let fn = createGreeting();

fn();