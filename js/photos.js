function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => showPhotos(data))
}
loadPhotos();
function showPhotos(photo) {
    const photoSection = document.getElementById("photo-section");
    for (const photos of photo) {
        // console.log(photos);
        const img = document.getElementById("image");
        img.src = photos.url;
        photoSection.appendChild(img);


    }
}