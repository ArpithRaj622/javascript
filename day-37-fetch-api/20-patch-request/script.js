async function updateTitle() {
    const update = {
        title : "New Title"
    };

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method : "PATCH",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(update)
        });

        if (response.ok === true) {
            const updatedData = await response.json();
            console.log(updatedData);
        } else {
            throw "Failed to update title";
        }

    } catch(error) {
        console.log(error);
    }
}

updateTitle();