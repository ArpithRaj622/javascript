const user = {
    name: "Arpith",
    age: 24
};

function validateUser(user, ageCheck) {
    let isEligible = ageCheck(user.age);
    if (isEligible) {
        console.log("User is eligible");
    } else {
        console.log("User is not eligible");
    }
}

function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

validateUser(user, isAdult);