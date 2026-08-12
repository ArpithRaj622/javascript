const user = {
    name : "Arpith",
}

function showName() {
    console.log(this.name);
}

const greetPerson = showName.bind(user);

greetPerson();