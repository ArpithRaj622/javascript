let name = "Arpith";

function outer() {
    let name = "Raj";

    function inner() {
        console.log(name);
    }

    return inner;
}

let fn = outer();

fn();