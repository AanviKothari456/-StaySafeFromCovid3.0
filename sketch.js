
var gameState = "level1";
var star;
var man, man_running;
var ground, invisibleGround, groundImage;
var edu,unemp, poll, pand, gw;
var eduGroup, pollGroup,pandGroup, unempGroup, gwGroup;

var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6,
poll,unemp,edu;
var score=0;

var gameOver, restart, bg;



function preload(){
  man_running =   loadAnimation("man1.png", "man2.png", "man3.png", "man4.png", "man5.png", "man6.png", "man7.png", "man8.png", "man10.png", "man11.png");
  backgroundImg=loadImage('background12.jpg');
 pollImg = loadImage("poll123.jpg");
 umempImg=loadImage('unemployment.jpg');
 eduImg=loadImage('noBook.jpg');
 //edu.scale=0.01;
gwImg=loadImage('gw.jpg');
pandImg=loadImage('pandemic.png');
starImg=loadImage('star.png');
bgImg=loadImage('abc.jpg');

}
//TO DO=>5 functions create , add framecount ==create sprite and add 1 image each; when istouching==> destroy , score+1, lifetime, velocity, 
function setup() {
  createCanvas(windowWidth, windowHeight);

  star=createSprite(470,50,10,10);
  star.addImage(starImg);
star.scale=0.03;

 man= createSprite(700,80,20,50);
 man.velocityY=2;
 man.addAnimation("running", man_running);

bg= createSprite(windowWidth/2,windowHeight/2);
  bg.addImage(bgImg);
  bg.scale=3.5;
  
  /*ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -(6 + 3*score/100);
  
  edu = createSprite(150,100);
 edu.addImage(eduImg);
  */
 /* pov = createSprite(150,140);
 pov.addImage(povImg);*/
 poll = createSprite(150,140);
poll.addImage(pollImg);
poll.scale=0.4;

 gw = createSprite(150,140);
gw.addImage(gwImg);
gw.scale=0.4;

pand = createSprite(150,140);
 pand.addImage(pandImg);
  pand.scale=0.4;

 edu = createSprite(150,100);
 edu.addImage(eduImg);
 edu.scale=0.1;

  eduGroup = new Group();
  unempGroup = new Group();
 pollGroup = new Group();
  pandGroup = new Group();
  gwGroup = new Group();
  problemGroup = new Group();

}

function draw() {
  

  text("STARS: "+ score, 500,50);
  
  if (gameState!=="end"){
    bg.velocityY=-4;
    if(bg<0){
      bg.y=windowHeight/2;
    }
    if(keyDown("RIGHT_ARROW")){
      man.x=man.x+5;
    }
    if(keyDown("LEFT_ARROW")){
      man.x=man.x-5;
    }
    if(keyDown("UP_ARROW")){
      man.y=man.y-5;
    }
    if(keyDown("DOWN_ARROW")){
      man.y=man.y+5;
    }

    obstacles();
   if (eduGroup.isTouching(man)){
     eduGroup.destroy();
    score=score+1;

   }
   if (pollGroup.isTouching(man)){
    pollGroup.destroy();
   score=score+1;

  }
  if (pandGroup.isTouching(man)){
    pandGroup.destroy();
   score=score+1;

  }
  if (gwGroup.isTouching(man)){
    gwGroup.destroy();
   score=score+1;

  }
  if (unempGroup.isTouching(man)){
    unempGroup.destroy();
   score=score+1;

  }

  drawSprites();
}
if(gameState ==="end"){  }
}

function obstacles(){
  if(frameCount%100 === 0){
    var problem = createSprite(150,100);
    problem.lifetime = 600;
    switch(gameState){
      case "level1": problem.addImage(eduImg);
                    problem.velocityY = -2;
                    
                    break;
      case "level2": problem.addImage(povImg);
                    problem.velocityY = -4;
                    break;   
      case "level3": problem.addImage(pollImg);
                    problem.velocityY = -4;
                    break;          
      case "level4": problem.addImage(gwImg);
                    problem.velocityY = -5;
                    break; 
      case "level5": problem.addImage(pandImg);
                    problem.velocityY = -6;
                    break;
                  
    }
    problemGroup.add(problem);
  }
}





function EduCollection(){
  if (frameCount%300===0 && gameState=="level1"){
    
    var pencil = createSprite(random(100, 1000), 0, 100, 100);
    pencil.velocityX = 6;
    pencil.lifetime=500;
    pencilImg=loadImage('pencil.png');
  pencil.addImage("pencil", pencilImg);
  
   
    }
    eduGroup.add(pencil);
  }
  
  
   
  

  function unempCollection(){
    if (frameCount%300===0){
      var job = createSprite(random(100, 1000), 0, 100, 100);
      job.velocityX = 6;
      job.lifetime=500;
      jobImg=loadImage('briefcase.jpg');
    job.addImage("pencil", jobImg);
     
      }
      unempGroup.add(job);
    }
    function pollCollection(){
      if (frameCount%300===0){
        var tree = createSprite(random(100, 1000), 0, 100, 100);
       tree.velocityX = 6;
       tree.lifetime=500;
        treeImg=loadImage('tree.png');
      tree.addImage("pencil", treeImg);
       
        }
        pollGroup.add(tree);
      }
      
      function pandCollection(){
        if (frameCount%300===0){
          var vaccine = createSprite(random(100, 1000), 0, 100, 100);
          vaccine.velocityX = 6;
          vaccine.lifetime=500;
          vaccineImg=loadImage('vaccine.jpg');
          vaccine.addImage("pencil", vaccineImg);
         
          }
          pandGroup.add(vaccine);
        }
        function gwCollection(){
          if (frameCount%300===0){
            var laws = createSprite(random(100, 1000), 0, 100, 100);
            laws.velocityX = 6;
            laws.lifetime=500;
            lawsImg=loadImage('laws123.png');
            laws.addImage("pencil", lawsImg);
           
            }
            gwGroup.add(laws);
          }
        
  function Questions(){
    Rect(900, 100, windowWidth,100);
    textSize(20);
    fill('red');
   text(' Do you think that inequalities like gender and cultural identity should affect education’s reach?', 200,400);
var yes=createSprite(500,400,50,50);
yes.loadImage('yes.png');
var no=createSprite(500,400,50,50);
no.loadImage('no.png');
  }
  
  

