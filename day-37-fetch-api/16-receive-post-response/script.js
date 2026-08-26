async function createPost() {
    const post = {
        title : "My first post",
        body : "Learning fetch API",
        userId : 1
    }
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(post)
    });
    const data = await response.json();
    console.log(data);
}

createPost();