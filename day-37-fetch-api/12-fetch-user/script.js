async function getUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/3");
        if (response.ok === true) {
            const user = await response.json();
            console.log(user.name);
            console.log(user.email);
            console.log(user.address.city);
        } else {
            throw "Failed to fetch user";
        } 
    } catch(error) {
        console.log(error);
    }
}

getUser();