function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => showPhotos(data))
}
loadPhotos();
function showPhotos(photos) {
    const photoSection = document.getElementById("photo-section");
    for (const photo of photos) {
        console.log(photo);
        // console.log(photos);
        const image = document.createElement('img');
        image.src = `${photo.url}`
        photoSection.appendChild(image);


    }
}