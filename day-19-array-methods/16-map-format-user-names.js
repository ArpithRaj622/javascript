const users = [
    { name: "Arpith", age: 24 },
    { name: "Raj", age: 23 },
    { name: "Sam", age: 25 },
    { name: "Tom", age: 22 }
];

const formattedNames = users.map((user) => {
    return user.name.toUpperCase();
});

console.log(formattedNames);