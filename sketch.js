// Mouse to draw!
let img;

function preload() {
  // Load the image
  img = loadImage("./glowing.gif");
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style('z-index','-2');
  cnv.style('position', 'absolute');
  imageMode(CENTER);
  background(0, 0, 0, 0); //last line opacity
}

function draw() {
  // Draw an image at your mouse position
  image(img, mouseX, mouseY, 100, 100); 
}