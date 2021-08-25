function users() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => loadUser(data))
}

function loadUser(data) {
    const userProfile = document.getElementById('user');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name} 
        Email:${user.email}`;
        userProfile.appendChild(li);
    }

}