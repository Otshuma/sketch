// Mouse to draw!
let img;

function preload() {
  // Load the image
  img = loadImage("AT-01.png");

}

function setup() {
  createCanvas(800, 800);

  // Set the background black
  background(200);
  
  // Image mode center will center the image on the mouse, comment out to see the difference
  imageMode(CENTER);
}

function draw() {

  // Draw an image at your mouse position
  image(img, mouseX, mouseY, 100,100); 
  
}