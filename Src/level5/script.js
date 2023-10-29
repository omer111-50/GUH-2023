const images = [
  "../images/OAO.jpg",
  "../images/Shaswar.jpg",
  "../images/Ibraheem.jpg",
];
let currentIndex = 0;
const imageElement = document.getElementById("image");

function cycleImages() {
  currentIndex = (currentIndex + 1) % images.length;
  imageElement.src = images[currentIndex];
}

setInterval(cycleImages, 250); // Change image every 3 seconds
