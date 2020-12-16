class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage=loadImage("sprites/smoke.png")
    this.trejectory=[]
  }

  display() {
    super.display();
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.velocity.x>10&&this.body.position.x>200) {
      var pos=[this.body.position.x,this.body.position.y]
      this.trejectory.push(pos)
    }
    for(var i=0;i<this.trejectory.length;i++) {
      image(this.smokeImage,this.trejectory[i][0],this.trejectory[i][1])
    }

    
  }
}
