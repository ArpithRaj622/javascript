const username = "Arpith";

function checkUsername(username, check) {
    let isValid = check(username);
    if (isValid) {
        console.log("Valid username");
    } else {
        console.log("Username too short");
    }
}

function isLongEnough(username) {
    if (username.length >= 5) {
        return true;
    } else {
        return false;
    }
}

checkUsername(username, isLongEnough);