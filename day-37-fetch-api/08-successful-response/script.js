async function getPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        if (response.ok === true) {
            const post = await response.json();
            console.log(post.title);
        } else {
            throw "Failed to fetch post";
        }
    } catch (error) {
        console.log(error);
    }
}

getPost();