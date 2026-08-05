const users = [
    { name: "Arpith", verified: true },
    { name: "Raj", verified: false },
    { name: "Sam", verified: true },
    { name: "Tom", verified: true }
];

const userNotVerified = users.some((user) => {
    return !user.verified;
});

console.log(userNotVerified);