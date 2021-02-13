var car,wall;
var speed,weight;
var deformation;
var trip = 0;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,height/2,60,height/2);
}

function draw() {
  background(255,255,255);  
  car.velocityX = speed/2;
  //car.bounceOff(wall);
  if(car.isTouching(wall)){
    deformation = 0.5*weight*speed*speed/22500;
    trip = trip + 1;
    car.velocityX = 0;
    if(trip > 0 && deformation < 100){
      car.shapeColor = color(0,255,0);
    }
    if(trip > 0 && deformation > 100 && deformation < 180);{
      car.shapeColor = color(230,230,0)
    } 
    if(trip > 0 && deformation > 180 ){
      car.shapeColor = color(255,0,0);
    }  
  }
  drawSprites();
}
