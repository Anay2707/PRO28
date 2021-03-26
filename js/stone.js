class Stone{
    constructor(x,y,r){
        var options = {  
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r
        this.image = loadImage("images/stone.png");
        this.body=Bodies.circle(this.x, this.y, this.r, options)
   //     this.stone = Constraint.create(options);
        World.add(world, this.body);
    }

    fly(){
        this.body.bodyA = null;
    }

    display(){
        var stonePos=this.body.position;	
		push()
		translate(stonePos.x, stonePos.y);
		fill(255,0,255)
		imageMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
        pop()
    }
    
}