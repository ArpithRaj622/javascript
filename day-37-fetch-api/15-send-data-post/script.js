async function createPost() {
    const post = {
        title : "My First Post",
        body : "Learning Fetcch API",
        userId : 1
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(post)
    });
}

createPost();