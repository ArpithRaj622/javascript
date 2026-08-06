const users = [
    { name: "Arpith", verified: true },
    { name: "Raj", verified: false },
    { name: "Sam", verified: true },
    { name: "Tom", verified: true },
    { name: "Sara", verified: false }
];

const verifiedUserCount = users.reduce((count, user) => {
    return user.verified ? count + 1 : count;
}, 0);

console.log(verifiedUserCount);