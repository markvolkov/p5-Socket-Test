function setup() {
  createCanvas(700,700);
  background(51);
}

let startingPoints;
let endingPoints;

function mousePressed() {
  startingPoints = {x: mouseX, y: mouseY};
}

function mouseDragged() {
  smooth();
  stroke(random(255), random(255), random(255));
  strokeWeight(random(5));
  line(startingPoints.x, startingPoints.y, mouseX, mouseY);
  // ellipse(mouseX, mouseY, 5, 5);
  return false;
}

// function mouseReleased() {
//    endingPoints.add(createVector(mouseX, mouseY));
//    line(startingPoints.x, startingPoints.y, endingPoints.x, endingPoints.y);
// }

function draw() {

}
