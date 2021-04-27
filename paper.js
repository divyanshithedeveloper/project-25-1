    class paper
{
    constructor(x,y,r){
    var options={
    'isStatic':false,
    'restitution':0,
    'density':1.2
    }

    this.x=x;
    this.y=y;
    this.r=r
    this.body=Bodies.circle(this.x, this.y, (this.r-90)/2, options)
    World.add(world, this.body);
    this.Image=loadImage("paper.png")
    }
     display()
    {
    var paperpos=this.body.position;		
    push()
    translate(paperpos.x, paperpos.y);
    rectMode(CENTER)
     fill("white");
    imageMode(CENTER)
    image(this.Image,0,0,this.width,this.height)
    //draw the ellipse here to display the paper
     ellipseMode(RADIUS)
     pop()
    }
    }
        
        


