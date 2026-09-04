const users = [
  { name: "Arpith", age: 24, active: true },
  { name: "Rahul", age: 17, active: true },
  { name: "Sneha", age: 22, active: false },
  { name: "Kiran", age: 19, active: true }
];

const activeAdultUserExists = users.some((user) => {
    return user.age >= 18 && user.active === true;
});

console.log(activeAdultUserExists);