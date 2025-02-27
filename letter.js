class Letter {
  constructor() {
    this.t = 'ANXIETY';
    this.reset();
  }
  
  update(x, y, w, h) {
    if (this.collide(x, y, w, h) == true) {
      this.y += 0;
      this.c = color(142,142,235);
    } else {
      this.y += this.dy;
      this.c = 0;
    }
    
    if (this.y + this.h > height) {
      this.reset();
    }
    
  }
  
  reset() {
    this.x0 = random(width);
    this.y0 = random(-50, -10);
    this.size = random(13, 30);
    
    this.c = 0;
    
    let bbox = font.textBounds(this.t, this.x0, this.y0, this.size);
    this.x = bbox.x; 
    this.y = bbox.y; 
    this.w = bbox.w;
    this.h = bbox.h;
    
    this.dy = map(this.size, 13, 30, 0.4, 3);
  }
  
  display() {

    noStroke();
    fill(this.c);
    textFont(font);
    textSize(this.size * 1.2);
    text(this.t, this.x, this.y + this.h);
  }
  
  collide(x, y, w, h) {
    let right = x + w;
    let left = x;
    let top = y; 
    let bottom = y+h;
    
    if (right >= this.x && 
       left <= this.x + this.w &&
       top <= this.y + this.h &&
       bottom >= this.y + this.h) {
      return true;
    } else {
      return false;
    }
  }
}