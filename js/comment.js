function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => showComment(data))
}
loadComment();
function showComment(comment) {
    const commentItem = document.getElementById("comment-item");
    for (const comments of comment) {
        console.log(comments);
        const p = document.createElement('div');
        p.innerHTML = `
     <h1>Name: ${comments.name}</h1>
     <h3>Email: ${comments.email}</h3>
     <p>Comment: ${comments.body}</p>
     `
        commentItem.appendChild(p);
    }
}