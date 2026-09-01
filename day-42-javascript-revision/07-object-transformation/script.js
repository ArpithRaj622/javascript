const user = {
    name: "Arpith",
    age: 24,
    city: "Raichur"
};

const updatedUSer = {
    ...user,
    age : 25,
    role : "Frontend Developer"
};

console.log(updatedUSer);