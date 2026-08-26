async function getUserData() {
    try {
        const [userResponse, postsResponse] = await Promise.all([fetch("https://jsonplaceholder.typicode.com/users/1"), fetch("https://jsonplaceholder.typicode.com/posts?userId=1")]);

        if (userResponse.ok === true && postsResponse.ok === true) {
            const user = await userResponse.json();
            const posts = await postsResponse.json();

            console.log(user.name);
            console.log(posts.length);
        } else {
            throw "Failed to fetch data";
        }

    } catch(error) {
        console.log(error);
    }
}

getUserData();