const users = [
    { name: "Arpith", age: 24, isVerified: true },
    { name: "Raj", age: 17, isVerified: false },
    { name: "Sam", age: 20, isVerified: true },
    { name: "Tom", age: 16, isVerified: true },
    { name: "Sara", age: 28, isVerified: false }
];

const eligibleUsers = users.filter((user) => {
    return user.age >= 18 && user.isVerified;
});

console.log(eligibleUsers);