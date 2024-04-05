// div where you want to put the images
const d = document.getElementById("slide");

const basePath = "static/img/";

// number of images
const maxX = 3;

let currentImageIndex = 1; 


function setBackgroundImage(index) {
  const imagePath = `${basePath}s${index}.jpg`;
  d.style.backgroundImage = `url(${imagePath})`;
}


setBackgroundImage(currentImageIndex);


function changeImage() {
  currentImageIndex = currentImageIndex % maxX + 1; 
  setBackgroundImage(currentImageIndex);
}


setInterval(changeImage, 2000);



// Made by subito. Ty for using 

