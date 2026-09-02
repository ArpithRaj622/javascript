const users = [
  { name: "Arpith", role: "developer", age: 24 },
  { name: "Rahul", role: "designer", age: 26 },
  { name: "Sneha", role: "tester", age: 23 }
];

const designerRole = users.find((user) => {
    return user.role === "designer";
});

const {name, age} = designerRole;

console.log(`${name} is ${age} years old`);