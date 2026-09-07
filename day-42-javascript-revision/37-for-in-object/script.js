const user = {
  name: "Arpith",
  age: 24,
  role: "developer"
};

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}