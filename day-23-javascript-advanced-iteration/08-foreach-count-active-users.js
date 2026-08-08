const users = [
    { name: "Arpith", isActive: true },
    { name: "Raj", isActive: false },
    { name: "Sam", isActive: true },
    { name: "Tom", isActive: false },
    { name: "Sara", isActive: true }
];
let count = 0;

users.forEach((user) => {
    if (user.isActive) {
        count++;
    }
});

console.log(count);