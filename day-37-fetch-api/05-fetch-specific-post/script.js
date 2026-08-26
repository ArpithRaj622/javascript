async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/5");
    const post = await response.json();
    console.log(post.id);
    console.log(post.title);
    console.log(post.body);
}

getPosts();