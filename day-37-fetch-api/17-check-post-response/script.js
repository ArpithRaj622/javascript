async function createPost() {
    const post = {
        title : "My first post",
        body : "Learning fetch API",
        userId : 1
    };
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(post)
        });

        if (response.ok === true) {
            const data = await response.json();
            console.log(data);
        } else {
            throw "Failed to create post";
        }

    } catch(error) {
        console.log(error);
    }
}

createPost();