var jogador;
var grupoCaixa, caixa;


function preload(){
    bikerAnimationsAttack = loadAnimation("assets/1 Biker/Biker_attack1.png","assets/1Biker/Biker_attack2.png","assets/1Biker/Biker_attack3.png");
    bikerAnimationsClimb = loadAnimation("assets/1 Biker/Biker_climb.png");
    bikerAnimationsDeath = loadAnimation("assets/1 Biker/Biker_death.png");
    bikerAnimationsDoubleJump = loadAnimation("assets/1 Biker/Biker_doublejump.png");
    bikerAnimationsHurt = loadAnimation("assets/1 Biker/Biker_hurt.png");
    bikerAnimationsIdle = loadAnimation("assets/1 Biker/Biker_idle.png");
    bikerAnimationsJump = loadAnimation("assets/1 Biker/Biker_jump.png");
    bikerAnimationsPunch = loadAnimation("assets/1 Biker/Biker_punch.png");
    bikerAnimationsRunAttack = loadAnimation("assets/1 Biker/Biker_run_attack.png");
    bikerAnimationsRun = loadAnimation("assets/1Biker/Biker_run.png");

    punkAnimationsAttack = loadAnimation("assets/2 Punk/Punk_attack1.png","assets/2 Punk/Punk_attack2 (2).png","assets/2 Punk/Punk_attack3 (3).png");
    punkAnimationsClimb = loadAnimation("assets/2 Punk/Punk_climb.png");
    punkAnimationsDeath = loadAnimation("assets/2 Punk/Punk_death.png");
    punkAnimationsDoubleJump = loadAnimation("assets/2 Punk/Punk_doublejump.png");
    punkAnimationsHurt = loadAnimation("assets/2 Punk/Punk_hurt.png");
    punkAnimationsIdle = loadAnimation("assets/2 Punk/Punk_idle.png");
    punkAnimationsJump = loadAnimation("assets/2 Punk/Punk_jump.png");
    punkAnimationsPunch = loadAnimation("assets/2 Punk/Punk_punch.png");
    punkAnimationsRunAttack = loadAnimation("assets/2 Punk/Punk_run_attack.png");
    punkAnimationsRun = loadAnimation("assets/2 Punk/Punk_run.png");

    cyborgAnimationsAttack = loadAnimation("assets/3 Cyborg/Cyborg_attack1.png","assets/3 Cyborg/Cyborg_attack2.png","assets/3 Cyborg/Cyborg_attack3.png");
    cyborgAnimationsClimb = loadAnimation("assets/3 Cyborg/Cyborg_climb.png");
    cyborgAnimationsDeath = loadAnimation("assets/3 Cyborg/Cyborg_death.png");
    cyborgAnimationsDoubleJump = loadAnimation("assets/3 Cyborg/Cyborg_doublejump.png");
    cyborgAnimationsHurt = loadAnimation("assets/3 Cyborg/Cyborg_hurt.png");
    cyborgAnimationsIdle = loadAnimation("assets/3 Cyborg/Cyborg_idle.png");
    cyborgAnimationsJump = loadAnimation("assets/3 Cyborg/Cyborg_jump.png");
    cyborgAnimationsPunch = loadAnimation("assets/3 Cyborg/Cyborg_punch.png");
    cyborgAnimationsRunAttack = loadAnimation("assets/3 Cyborg/Cyborg_run_attack.png");
    cyborgAnimationsRun = loadAnimation("assets/3 Cyborg/Cyborg_run.png");

    Barrel1 = loadImage("Objects/Barrel (1).png");
    Barrel2 = loadImage("Objects/Barrel (2).png");
    Box = loadImage("Objects/Box.png");
    DoorLocked = loadImage("Objects/DoorLocked.png");
    DoorOpen = loadImage("Objects/DoorOpen.png");
    DoorUnlocked = loadImage("Objects/DoorUnlocked.png");
    Saw = loadImage("Objects/Saw.png");
    Switch = loadAnimation("Objects/Switch (1).png","Objects/Switch (2).png") ;

    Acid = loadAnimation("Tiles/Acid (1).png","Tiles/Acid (2).png");
    BGTile1 = loadImage("Tiles/BGTile (1).png");
    BGTile2 = loadImage("Tiles/BGTile (2).png");
    BGTile3 = loadImage("Tiles/BGTile (3).png");
    BGTile4 = loadImage("Tiles/BGTile (4).png");
    BGTile5 = loadImage("Tiles/BGTile (5).png");
    BGTile6 = loadImage("Tiles/BGTile (6).png");
    BGTile7 = loadImage("Tiles/BGTile (7).png");
    Fence1 = loadImage("Tiles/Fence (1).png");
    Fence2 = loadImage("Tiles/Fence (2).png");
    Fence3 = loadImage("Tiles/Fence (3).png");
    Spike = loadImage("Tiles/Spike.png");
    Tile1 = loadImage("Tiles/Tile (1).png");
    Tile2 = loadImage("Tiles/Tile (2).png");
    Tile3 = loadImage("Tiles/Tile (3).png");
    Tile4 = loadImage("Tiles/Tile (4).png");
    Tile5 = loadImage("Tiles/Tile (5).png");
    Tile6 = loadImage("Tiles/Tile (6).png");
    Tile7 = loadImage("Tiles/Tile (7).png");
    Tile8 = loadImage("Tiles/Tile (8).png");
    Tile9 = loadImage("Tiles/Tile (9).png");
    Tile10 = loadImage("Tiles/Tile (10).png");
    Tile11 = loadImage("Tiles/Tile (11).png");
    Tile12 = loadImage("Tiles/Tile (12).png");
    Tile13 = loadImage("Tiles/Tile (13).png");
    Tile14 = loadImage("Tiles/Tile (14).png");    
    Tile15 = loadImage("Tiles/Tile (15).png");
    //Parei aqui!!!











}
function setup() {
    canvas = createCanvas(800, 750);
    
    jogador = createSprite(100,700,50,50);
    


	

	

}
    function draw(){
    background(255);
    
    if(keyDown(RIGHT_ARROW)){
       jogador.x = jogador.x+5;
       
    }
    if(keyDown(LEFT_ARROW)){
       jogador.x = jogador.x-5;
       
    }
    if(keyDown("space")){
       jogador.y = jogador.y-5;
       
    }
    
    gerarCaixas();
    drawSprites();
}
    function gerarCaixas(){
        if (frameCount % 60 === 0){
            var caixa = createSprite(100,700,50,50);
            caixa.y = Math.round(random(700,650));
            caixa.addImage(Tile15);
            caixa.velocityX = -5;
        }
    }