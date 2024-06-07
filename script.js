const images = ['K.jpg','data.jpg','robot.jpg','flash.jpg'];

let currentIndex = 1;

function changeBackgroundImage() {
    document.body.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 5000); // Change image every 5 seconds

// Initialize the background image
changeBackgroundImage();
