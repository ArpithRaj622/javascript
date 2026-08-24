async function checkData() {
    try {
        throw "Data is invalid";
    } catch(error) {
        console.log(error);
    }
}

checkData();