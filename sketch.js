const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var loki1, loki2, loki3
var ground
var thor,thorImage
var bolt,  hammer, elastic, bolt2, bolt3, bolt4, bolt5, bolt6, bolt7, bolt8, bolt9, bolt10
var  bolt11, bolt12, bolt13, bolt14, bolt15, bolt16, bolt17, bolt18, bolt19, bolt20, bolt21, bolt22, bolt23
var bolt24, bolt25, bolt26, bolt27, bolt28, bolt29, bolt30, bolt31, bolt32, bolt33, bolt34, bolt35
var bolt36, bolt37, bolt38, bolt39, bolt40, bolt41, bolt42, bolt43, bolt44, bolt45, bolt46, bolt47
var  bolt48, bolt49, bolt50, bolt51, bolt52, bolt53, bolt54, bolt55, bolt56, bolt57, bolt58, bolt59
var  bolt60, bolt61, bolt62, bolt63, bolt64, bolt65, bolt66, bolt67, bolt68, bolt69, bolt70, bolt71
var bolt72,bolt73,bolt74,bolt75,bolt76,bolt77,bolt78,bolt79,bolt80,bolt81,bolt82,bolt83,bolt84,bolt85

var bolt86,bolt87,bolt88,bolt89,bolt90

var edges
var gameover
var abc

function preload(){
  ground=loadImage("images/grass.png.jpg")
 
  thorImage = loadImage("images/thor2.png");

  
}

function setup() {

  createCanvas(1200,600);
  engine = Engine.create();
	world = engine.world;
 
  edges=createEdgeSprites()
  

 
 
  bolt=new Bolt(50,50,30)
  bolt2=new Bolt(50,110,30)
  bolt3=new Bolt(50,170,30)
  bolt4=new Bolt(50,230,30)
  bolt5=new Bolt(50,290,30)
  bolt6=new Bolt(50,350,30)
  bolt7=new Bolt(50,410,30)
  bolt8=new Bolt(50,470,30)
  bolt9=new Bolt(50,530,30)
  bolt10=new Bolt(50,590,30)
  bolt11=new Bolt(120,50,30)
  bolt12=new Bolt(120,110,30)
  bolt13=new Bolt(120,170,30)
  bolt14=new Bolt(120,230,30)
  bolt15=new Bolt(120,290,30)
  bolt16=new Bolt(120,350,30)
  bolt17=new Bolt(120,410,30)
  bolt18=new Bolt(120,470,30)
  bolt19=new Bolt(120,530,30)
  bolt20=new Bolt(120,590,30)
  bolt21=new Bolt(190,50,30)
  bolt22=new Bolt(190,110,30)
  bolt23=new Bolt(190,170,30)
  bolt24=new Bolt(190,230,30)
  bolt25=new Bolt(190,290,30)
  bolt26=new Bolt(190,350,30)
  bolt27=new Bolt(190,410,30)
  bolt28=new Bolt(190,470,30)
  bolt29=new Bolt(190,530,30)
  bolt30=new Bolt(190,590,30)
  bolt31=new Bolt(380,50,30)
  bolt32=new Bolt(380,110,30)
  bolt33=new Bolt(380,170,30)
  bolt34=new Bolt(380,230,30)
  bolt35=new Bolt(380,290,30)
  bolt36=new Bolt(380,350,30)
  bolt37=new Bolt(380,410,30)
  bolt38=new Bolt(380,470,30)
  bolt39=new Bolt(380,530,30)
  bolt40=new Bolt(380,590,30)
  bolt41=new Bolt(450,50,30)
  bolt42=new Bolt(450,110,30)
  bolt43=new Bolt(450,170,30)
  bolt44=new Bolt(450,230,30)
  bolt45=new Bolt(450,290,30)
  bolt46=new Bolt(450,350,30)
  bolt47=new Bolt(450,410,30)
  bolt48=new Bolt(450,470,30)
  bolt49=new Bolt(450,530,30)
  bolt50=new Bolt(450,590,30)
  bolt51=new Bolt(520,50,30)
  bolt52=new Bolt(520,110,30)
  bolt53=new Bolt(520,170,30)
  bolt54=new Bolt(520,230,30)
  bolt55=new Bolt(520,290,30)
  bolt56=new Bolt(520,350,30)
  bolt57=new Bolt(520,410,30)
  bolt58=new Bolt(520,470,30)
  bolt59=new Bolt(520,530,30)
  bolt60=new Bolt(520,590,30)
  bolt61=new Bolt(710,50,30)
  bolt62=new Bolt(710,110,30)
  bolt63=new Bolt(710,170,30)
  bolt64=new Bolt(710,230,30)
  bolt65=new Bolt(710,290,30)
  bolt66=new Bolt(710,350,30)
  bolt67=new Bolt(710,410,30)
  bolt68=new Bolt(710,470,30)
  bolt69=new Bolt(710,530,30)
  bolt70=new Bolt(710,590,30)
  bolt71=new Bolt(780,50,30)
  bolt72=new Bolt(780,110,30)
  bolt73=new Bolt(780,170,30)
  bolt74=new Bolt(780,230,30)
  bolt75=new Bolt(780,290,30)
  bolt76=new Bolt(780,350,30)
  bolt77=new Bolt(780,410,30)
  bolt78=new Bolt(780,470,30)
  bolt79=new Bolt(780,530,30)
  bolt80=new Bolt(780,590,30)
  bolt81=new Bolt(850,50,30)
  bolt82=new Bolt(850,110,30)
  bolt83=new Bolt(850,170,30)
  bolt84=new Bolt(850,230,30)
  bolt85=new Bolt(850,290,30)
  bolt86=new Bolt(850,350,30)
  bolt87=new Bolt(850,410,30)
  bolt88=new Bolt(850,470,30)
  bolt89=new Bolt(850,530,30)
  bolt90=new Bolt(850,590,30)

  thor=createSprite(1000,300,50,50)
  thor.addImage(thorImage);
  thor.scale=0.25

  abc=thor.x
  hammer=new Hammer(abc,300,30)

  elastic=new Elastic(hammer.body,{x:950, y:300})

  loki1=createSprite(270,100,50,50)
  loki1.velocityY=6
  
  
  

  loki2=createSprite(600,300,50,50)
  loki2.velocityY=6

  loki3=createSprite(950,500,50,50)
  loki3.velocityY=6
  

  Engine.run(engine);
}

function draw() {
  background(ground);
  //image(ground,0,displayHeight*5,displayWidth,displayHeight*5)  
  thor.velocityY=0
  thor.velocityX=0
 
  hammer.display()
  
 elastic.display()
 bolt.display()
 bolt2.display()
 bolt3.display()
 bolt4.display()
 bolt5.display()
 bolt6.display()
 bolt7.display()
 bolt8.display()
 bolt9.display()
 bolt10.display()
 bolt11.display()
 bolt12.display()
 bolt13.display()
 bolt14.display()
 bolt15.display()
 bolt16.display()
 bolt17.display()
 bolt18.display()
 bolt19.display()
 bolt20.display()
 
 bolt21.display()
 bolt22.display()
 bolt23.display()
 bolt24.display()
 bolt25.display()
 bolt26.display()
 bolt27.display()
 bolt28.display()
 bolt29.display()
 bolt30.display()
 bolt31.display()
 bolt32.display()
 bolt33.display()
 bolt34.display()
 bolt35.display()
 bolt36.display()
 bolt37.display()
 bolt38.display()
 bolt39.display()
 bolt40.display()
 bolt41.display()
 bolt42.display()
 bolt43.display()
 bolt44.display()
 bolt45.display()
 bolt46.display()
 bolt47.display()
 bolt48.display()
 bolt49.display()
 bolt50.display()
 bolt51.display()
 bolt52.display()
 bolt53.display()
 bolt54.display()
 bolt55.display()
 bolt56.display()
 bolt57.display()
 bolt58.display()
 bolt59.display()
 bolt60.display()
 bolt61.display()
 bolt62.display()
 bolt63.display()
 bolt64.display()
 bolt65.display()
 bolt66.display()
 bolt67.display()
 bolt68.display()
 bolt69.display()
 bolt70.display()
 bolt71.display()
 bolt72.display()
 bolt73.display()
 bolt74.display()
 bolt75.display()
 bolt76.display()
 bolt77.display()
 bolt78.display()
 bolt79.display()
 bolt80.display()
 bolt81.display()
 bolt82.display()
 bolt83.display()
 bolt84.display()
 bolt85.display()
 bolt86.display()
 bolt87.display()
 bolt88.display()
 bolt89.display()
 bolt90.display()

 if(keyDown(UP_ARROW)){
   thor.x=500
   Matter.Body.setPosition(hammer.body,{x:500,y:300})
   elastic.fly()
  
  }

  if(keyDown(DOWN_ARROW)){
    thor.velocityY=5
   }

   if(keyDown(LEFT_ARROW)){
    thor.velocityX=5
   }

   if(keyDown(RIGHT_ARROW)){
    thor.velocityX=-5
   }

 if(loki3.isTouching(thor)){
  // gameover=createSprite(500,500,2000,1000)
  loki1.destroy()
 }
  
 detectcollision(hammer,bolt);
 detectcollision(hammer,bolt2);
 detectcollision(hammer,bolt3);
 detectcollision(hammer,bolt4);
 detectcollision(hammer,bolt5);
 detectcollision(hammer,bolt6);
 detectcollision(hammer,bolt7);
 detectcollision(hammer,bolt8);
 detectcollision(hammer,bolt9);
 detectcollision(hammer,bolt10);
 detectcollision(hammer,bolt11);
 detectcollision(hammer,bolt12);
 detectcollision(hammer,bolt13);
 detectcollision(hammer,bolt14);
 detectcollision(hammer,bolt15);
 detectcollision(hammer,bolt16);
 detectcollision(hammer,bolt17);
 detectcollision(hammer,bolt18);
 detectcollision(hammer,bolt19);
 detectcollision(hammer,bolt20);
 detectcollision(hammer,bolt21);
 detectcollision(hammer,bolt22);
 detectcollision(hammer,bolt80);
 detectcollision(hammer,bolt81);
 detectcollision(hammer,bolt82);
 detectcollision(hammer,bolt83);
 detectcollision(hammer,bolt84);
 detectcollision(hammer,bolt85);
 detectcollision(hammer,bolt86);
 detectcollision(hammer,bolt87);
 detectcollision(hammer,bolt88);
 detectcollision(hammer,bolt89);
 detectcollision(hammer,bolt90);
 
 loki1.bounceOff(edges)
 loki2.bounceOff(edges)
 loki3.bounceOff(edges)
 
  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(hammer.body,{x:mouseX,y:mouseY})
 }

 

 

function detectcollision(hammer,bolt){
  boltPos=bolt.body.position
	hammerPos=hammer.body.position

	var distance=dist(	hammerPos.x, 	hammerPos.y,boltPos.x,boltPos.y)
	if(distance<=bolt.r+hammer.r){
		Matter.Body.setStatic(bolt.body,false)
	}
}

	

