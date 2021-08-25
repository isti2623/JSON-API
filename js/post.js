function postLoad() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => postData(data))
}
postLoad();
function postData(post) {
    const postContainer = document.getElementById("posts");
    for (const postItem of post) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3>${postItem.title}</h3>
        <p>${postItem.body}</p>
        `
        postContainer.appendChild(div);

    }
}