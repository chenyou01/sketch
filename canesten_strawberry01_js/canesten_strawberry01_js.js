

var bobCount = 3000;
var bobs = [];
var globalHue;


let img;
let img2;

function preload() {
  img2 = loadImage('cmnew1.gif'); //加载gif图像
}

function setup() {
  createCanvas(750, 1300);
  
  img = loadImage('../assets/dh.gif'); // 加载图像

  img2.resize(width, height);
  
  //colorMode(HSB, 0);
  reset();
}


function draw() {
  background(0);
  
  
    // 在坐标(0, 0)，显示包装大小的图像 
  image(img, 0, 0, img.width / 3, img.height / 3);
  
      // 在坐标(0, 0)，显示2大小的图像 
  image(img2, 0, 0, img2.width, img2.height);
  
  for (let i = 0; i < bobs.length; i++) {
    let b = bobs[i];
    b.move();
    
    stroke(255,102,51);
    
    // Exaggerate vector from lastPos to pos.
    let newPos = b.pos.copy();
    newPos.sub(b.lastPos);
    newPos.mult(15);
    newPos.add(b.pos);
    
    line(newPos.x, newPos.y, b.pos.x, b.pos.y);
  }
}


function mouseClicked() {
  reset();
}


function reset() {
  globalHue = random(255);
  
  bobs.splice(0, bobs.length);
  
  for (let i = 0; i < bobCount; i++) {
    bobs.push(new Bob(random(width), random(height)));
  }
  
  // Make sure mouse doesn't immediately effect particles.
  mouseX = -9999;
  mouseY = -9999;
  
  background(10);
}
