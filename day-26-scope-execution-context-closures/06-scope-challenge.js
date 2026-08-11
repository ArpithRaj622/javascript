function checkAccess() {
    if(true) {
        var x = 10;
        let y = 20;
    }
    console.log(x);
    // console.log(y);  ReferenceError: y is not defined
}

checkAccess();