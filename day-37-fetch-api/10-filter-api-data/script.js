async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (response.ok === true) {
            const posts = await response.json();
            const user1Posts = posts.filter((post) => {
                return post.userId === 1;
            });
            user1Posts.forEach((post) => {
                console.log(post.title);
            });
        } else {
            throw "Failed to fetch posts";
        }

    } catch(error) {
        console.log(error);
    }
}

getPosts();