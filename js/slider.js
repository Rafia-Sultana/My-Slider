const images = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',

];
let imageIndex = 0;
const img = document.getElementById("slider-image");
setInterval(() => {
    if (imageIndex >= images.length) {

        imageIndex = 0;
    }
    const imageUrl = images[imageIndex];
    img.setAttribute('src', imageUrl)
    imageIndex++;
}, 1000)