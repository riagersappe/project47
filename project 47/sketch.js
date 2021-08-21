var sky, skyImg
var plane, planeImg
var obstacle, obstacleImg, obstacleGroup
var gamestate = 1

function preload(){
    skyImg = loadImage("background.jpeg");
    planeImg = loadImage("plane.png");
    obstacle1Img = loadImage("badplane.png");
    obstacle2Img = loadImage("meteor.png");
    obstacle3Img = loadImage("storm.png");
    obstacle4Img = loadImage("tornado.png");
}

function setup(){
    createCanvas(600,500);
    sky = createSprite(200,180,400,20);
    sky.addImage(skyImg);
    sky.scale = 2;

    plane = createSprite(50,150,20,50);
    plane.addImage("plane",planeImg);
    plane.scale = 0.5;

    obstacleGroup = new Group();
}

function draw(){
    background("white");
    if (gamestate === 1){
        spawnObstacles();
    sky.velocityX = -4
    if(keyDown("UP_ARROW")){
        plane.y = plane.y - 5;
    }
    if(keyDown("DOWN_ARROW")){
        plane.y = plane.y + 5;
    }
    if(sky.x < 50){
        sky.x = sky.width/2
    }
    if(plane.y >= 400){
        plane.y = 365
    }

    if(plane.y <= 0){
        plane.y = 35
    }
    if (plane.isTouching(obstacleGroup)){
        obstacleGroup.destroyEach();
        sky.velocityX = 0;
        gamestate = 2;
     }
    }
    
    drawSprites();
}

function spawnObstacles(){
    if (frameCount % 100 === 0){
        obstacle = createSprite(600,(Math.round(random(50,350))),10,40);
        obstacle.velocityX = -6;

        var rand = Math.round(random(1,4));
        switch(rand){
            case 1: obstacle.addImage(obstacle1Img);
            obstacle.scale = 0.5;
            break;
            case 2: obstacle.addImage(obstacle2Img);
            obstacle.scale = 0.5;
            break;
            case 3: obstacle.addImage(obstacle3Img);
            obstacle.scale = 0.5;
            break;
            case 4: obstacle.addImage(obstacle4Img);
            obstacle.scale = 0.5;
            break;
            default: break;
        }
        obstacle.lifetime = 2000;
        obstacleGroup.add(obstacle);
    }
}
