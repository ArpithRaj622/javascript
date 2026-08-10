const users = [
    { name: "Arpith", age: 24, isVerified: true },
    { name: "Raj", age: 17, isVerified: true },
    { name: "Sam", age: 26, isVerified: false },
    { name: "Tom", age: 21, isVerified: true }
];

function findEligibleUser(users, isEligible) {
    for (let i = 0; i < users.length; i++) {
        let eligible = isEligible(users[i].age, users[i].isVerified);
        if (eligible) {
            console.log(users[i].name);
            break;
        }
    }
}

function isEligible(age, verified) {
    if (age >= 18 && verified === true) {
        return true;
    } else {
        return false;
    }
}

findEligibleUser(users, isEligible);