let name = "Arpith";

function outer() {
    let name = "Raj";
    
    function inner() {
        let name = "Ghost Rider";
        console.log(name);
    }
    inner();
}

outer();