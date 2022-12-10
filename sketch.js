var ball, blocks, obstacles;
var blocksGroup;
var score =0;

//var r1 = Math.round(random(10,490))
//var r2 = Math.round(random(10,470))

function setup(){
  createCanvas(500, 500);
  ball = createSprite(250, 450, 20, 20);
  ball.velocityX = 5;
  ball.velocityY = -4;
  edges = createEdgeSprites();
  blocksGroup = new Group();
  
  createBlocks(50, 20);
  createBlocks(100, 60);
  createBlocks(150, 100);
  createBlocks(200, 150);
  createBlocks(250, 200);
  



  
  
}

function draw(){
  background(ball.x, ball.y, ball.x);

  textSize(15);
  text("SCORE: " + score, 400,30);
  
  

  drawSprites();

  ball.bounceOff(edges);
  ball.bounceOff(blocksGroup, blocksDestroy);
 
}

function createBlocks(y, num){
  for(i=1; i<=num; i=i+1){
    blocks= createSprite(100+i*40, y, 20, 20);
    blocksGroup.add(blocks);
    //blocks.velocityY = 0.5
  }
}

function blocksDestroy( ball, blocks){
  blocks.destroy();
  score = score+10
}

/*function createBlocks(){
  
  for(i=1; i<=15; i=i++){
    blocks = createSprite(r1, r2, 20, 20)
  };
  
}*/