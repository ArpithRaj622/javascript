async function deletePost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method : "DELETE"
        });

        if (response.ok === true) {
            console.log("Post delete successfully");
        } else {
            throw "Failed to delete post";
        }

    } catch(error) {
        console.log(error);
    }
}

deletePost();