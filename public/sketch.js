var socket;

function setup() {
  createCanvas(800,600);
  background(53);
  socket = io.connect();

  socket.on('mouseData', function(data) {
    console.log("Recieved: mouseData");
    noStroke();
    fill(random(255),random(255), random(255));
    ellipse(data.x, data.y, data.r, data.r);
    //line(data.x, data.y);
  });

}

function mouseDragged() {

  var data = {
    x: mouseX,
    y: mouseY,
    r: random(100)
  }

  noStroke();
  fill(random(255),random(255), random(255));
  ellipse(mouseX, mouseY, data.r, data.r);
  //line(mouseX, mouseY);
  socket.emit('mouseData', data);
  console.log("Emitted: mouseData");
  console.log(data);

}

function draw() {
}
