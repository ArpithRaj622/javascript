async function updatePost() {
    const post = {
        title: "Updated Post",
        body: "I updated this post",
        userId: 1
    }
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method : "PUT",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(post)
        });

        if (response.ok === true) {
            const data = await response.json();
            console.log(data);
        } else {
            throw "Failed to update post";
        }
    } catch(error) {
        console.log(error);
    }
}

updatePost();