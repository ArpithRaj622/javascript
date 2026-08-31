const users = [
    { name: "Arpith", age: 24, active: true },
    { name: "Rahul", age: 17, active: true },
    { name: "Kiran", age: 26, active: false },
    { name: "Vijay", age: 22, active: true }
];

const activeAdults = users.filter((user) => {
    return user.age >= 18 && user.active === true;
});

const activeAdultsNames = activeAdults.map((user) => {
    return user.name;
});

console.log(activeAdultsNames);