async function getPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/9999");

        if (response.ok === false) {
            throw "Failed to fetch post";
        } else {
            const data = await response.json();
            console.log(data);
        }

    } catch(error) {
        console.log(error);
    }
}

getPost();