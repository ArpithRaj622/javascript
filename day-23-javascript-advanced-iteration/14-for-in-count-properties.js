const user = {
    name: "Arpith",
    age: 24,
    city: "Raichur",
    isActive: true,
    course: "BCA"
};

let count = 0;

for (let key in user) {
    count++;
}

console.log(count);