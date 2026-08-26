async function getPostTitles() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (response.ok === true) {
            const posts = await response.json();
            const titles = posts.map((post) => {
                return post.title;
            });
            console.log(titles);
        } else {
            console.log("Failed to fetch posts");
        }
    } catch(error) {
        console.log(error);
    }
}

getPostTitles();