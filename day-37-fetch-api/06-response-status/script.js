async function checkResponse() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response.ok);
    console.log(response.status);
}

checkResponse();