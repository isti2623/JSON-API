function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => showPhotos(data))
}
loadPhotos();
function showPhotos(photo) {
    const photoSection = document.getElementById("photo-section");
    for (const photos of photo) {
        const img = document.createElement('img');


    }
}