let x = 10;

function outer() {
    let y = 20;

    function inner() {
        let z = 30;

        console.log(y);
        console.log(x);
    }

    inner();
    
    // console.log(z); ReferenceError: z is not defined
}

outer();