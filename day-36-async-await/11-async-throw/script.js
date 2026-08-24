async function checkData() {
    throw "Data is invalid";
}

checkData() 
    .catch((error) => {
        console.log(error);
    });