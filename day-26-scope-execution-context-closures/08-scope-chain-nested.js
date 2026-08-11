let country = "India";

function outer() {
    let state = "Karnataka";

    function inner() {
        console.log(country);
        console.log(state);
    }
    inner(); 
}

outer();