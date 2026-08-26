async function getPost(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

        if (response.ok === true) {
            const post = await response.json();
            console.log(post.title);
        } else {
            throw "Post not found";
        }

    } catch(error) {
        console.log(error);
    }
}

getPost(10);