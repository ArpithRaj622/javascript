const users = [
    { name: "Arpith", verified: true },
    { name: "Raj", verified: false },
    { name: "Sam", verified: true },
    { name: "Tom", verified: false }
];

const notVerifiedUser = users.find((user) => {
    return user.verified === false;
});

console.log(notVerifiedUser);