
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy,boyI;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1000,100,30);
	mango2=new mango(1150,90,30);
	mango3=new mango(1200,180,30);
	mango4=new mango(950,180,30);
	mango5=new mango(1100,140,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone = new Stone(240,420,30);
	launcher = new Launcher(stone.body,{x:250, y:110})
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy,200,340,200,300);

  
  

  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  stone.display();

  groundObject.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);

  drawSprites();
}

function mouseDragged(){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }

	function mouseReleased(){
		launcher.fly();
	}	

	function detectollision(){
		mangoBodyPosition = 1mango.body.position
		stoneBodyPosition = 1stone.body.position
	
		var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if(distance<=1mango.r+1stone.r){
			Matter.Body.setStatic(1mango.body,false);
		}
	}



