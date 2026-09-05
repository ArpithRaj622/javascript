const users = [
  { name: "Arpith", role: "developer" },
  { name: "Rahul", role: "designer" },
  { name: "Sneha", role: "tester" }
];

const index = users.findIndex((user) => {
    return user.role === "tester";
});

console.log(index);