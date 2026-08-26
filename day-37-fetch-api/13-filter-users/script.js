async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (response.ok === true) {
            const users = await response.json();
            const cityUsers = users.filter((user) => {
                return user.address.city === "South Christy";
            });
            cityUsers.forEach((cityUser) => {
                console.log(cityUser.name);
            });
        } else {
            throw "Failed to fetch users";
        }
    } catch(error) {
        console.log(error);
    }
}

getUsers();