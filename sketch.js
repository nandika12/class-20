var movingrect,fixedrect;
function setup(){
 createCanvas(600,600)
 movingrect= createSprite(200,100,50,60) 
 fixedrect=createSprite(600,100,50,60)
 o1= createSprite(300,200,50,60) 
 o2=createSprite(400,500,50,60)
 o3= createSprite(250,300,50,60) 
 o4=createSprite(400,300,50,60)


 movingrect.shapeColor='red'
 fixedrect.shapeColor='pink'
 o1.shapeColor='green'
 o2.shapeColor='pink'
 o3.shapeColor='red'
 o4.shapeColor='pink'
movingrect.velocityX=4
fixedrect.velocityX=-5





}
function draw(){
  background('green')
  
 console.log(movingrect.width/2+fixedrect.width/2)
console.log(movingrect.x-fixedrect.x)
drawSprites()
if (istouching(fixedrect,movingrect)){
  movingrect.shapeColor='purple'
  fixedrect.shapeColor='black'
}else{
  movingrect.shapeColor='red'
  fixedrect.shapeColor='pink'
}


bounceOff(movingrect,fixedrect)
}



  

function bounceOff(body1,body2){
  
  
  if (body1.x-body2.x<body1.width/2+body2.width/2&&
  body2.x-body1.x<body1.width/2+body2.width/2){
    body1.velocityX=body1.velocityX*(-1)
    body2.velocityX=body2.velocityX*(-1)}
    else if(body1.y-body2.y<body1.height/2+body2.height/2&&
      body2.y-body1.y<body1.height/2+body2.height/2){
        body1.velocityY=body1.velocityY*(-1)
        body2.velocityY=body2.velocityY*(-1)
      }





    }


  













