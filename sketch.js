
let ballSystem = [];

function setup() {
  createCanvas(600, 600);
  for(x = 0; x < 1000; x++){
    let rx = random(15, width - 15);
    let ry = random(15, height - 15);
    let rr = random(10, 50);
    let colorRange = [0, 255];
    ballSystem[x] = new Ball(rx, ry, rr, colorRange);
  }

}

function draw() {
  background(230,9,200);
  for (x = 0; x < ballSystem.length; x++){
    ballSystem[x].move();
    ballSystem[x].show();
    ballSystem[x].checkEdges();
  }
  
}
  
class Ball {
  constructor(x,y,r, colorRange){
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color(
      random(colorRange[0], colorRange[1]),
      random(colorRange[0], colorRange[1]),
      random(colorRange[0], colorRange[1])
    );

    
  }

  move(){
    this.x = this.x + random(-4, 4);
    this.y = this.y + random(-4, 4);
  }

show(){
  fill(this.color);
  noStroke();
  ellipse(this.x, this.y, this.r, this.r);

}

checkEdges(){
  if (this.x < 15){
    this.x = 15;
  } else if (this.x > width - 15){
    this.x = width - 15;

  }

  if (this.y < 15) {
    this.y = 15;
  } else if (this.y > height - 15){
    this.y = height - 15;

  }
}
}

