var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["15a1677f-ca25-4c0c-83d3-003359c2cc20","27f124d8-c85c-48f4-ab1f-1c83f4b92be9"],"propsByKey":{"15a1677f-ca25-4c0c-83d3-003359c2cc20":{"name":"hero","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"b05M2U9afEGyXP_wdev9D6W7PAVNc_rL","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/15a1677f-ca25-4c0c-83d3-003359c2cc20.png"},"27f124d8-c85c-48f4-ab1f-1c83f4b92be9":{"name":"enemy","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"_vBfacmuCOjP81lfrIJAlynqHkesHyMB","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/27f124d8-c85c-48f4-ab1f-1c83f4b92be9.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var limits1, limits2;
var sam;
var finish;

var gamestage = 0;


  finish = createSprite(373,190,52,140);
  finish.shapeColor = "yellow";
  
  limits1 = createSprite(190,120,420,3);
  limits2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  sam.setAnimation("hero");
  sam.scale = 0.4;

sam.setCollider("rectangle",0 ,0 ,50 ,50 ,0 );
  
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
  car1.setAnimation("enemy");
  car2.setAnimation("enemy");
  car3.setAnimation("enemy");
  car4.setAnimation("enemy");
  
  car1.scale = 0.3;
  car2.scale = 0.3;
  car3.scale = 0.3;
  car4.scale = 0.3;
  
car1.setCollider("rectangle",-5 ,-10 ,80 ,80 ,0 );
car2.setCollider("rectangle",-5 ,-10 ,80 ,80 ,0 );
car3.setCollider("rectangle",-5 ,-10 ,80 ,80 ,0 );
car4.setCollider("rectangle",-5 ,-10 ,80 ,80 ,0 );
  
  car1.velocityY = 5;
  car2.velocityY = -5;
  car3.velocityY = 5;
  car4.velocityY = -5;

function draw() {
  
  if(gamestage == 1){
    
    loadImage("assets/voc--ganhou-123024048.jpg");
    
  }
  
   background("white");
  text("Vidas: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  
  //sistema de colisão
  car1.bounceOff(limits1);
  car2.bounceOff(limits1);
  car3.bounceOff(limits1);
  car4.bounceOff(limits1);
  
  car1.bounceOff(limits2);
  car2.bounceOff(limits2);
  car3.bounceOff(limits2);
  car4.bounceOff(limits2);
  
  sam.collide(limits1);
  sam.collide(limits2);
  
  if(sam.isTouching(car1) || sam.isTouching(car2) || sam.isTouching(car3) || sam.isTouching(car4)){
    
    life = life + 1;
    
    sam.x = 20;
    sam.y = 190;
    
    sam.setVelocity(0,0);
    sam.setVelocity(0,0);
  }
  
  //sistema de movimentação
  
  if(keyDown("w")){
  
  sam.y = sam.y - 5;
  
  }
  
  if(keyDown("s")){
  
  sam.y = sam.y + 5;
  
  }
  
  if(keyDown("a")){
  
  sam.x = sam.x - 5;
  
  }
  
  if(keyDown("d")){
  
  sam.x = sam.x + 5;
  
  }
  
  if(sam.isTouching(finish)){
    sam.x = 20;
    sam.y = 190;
    
    gamestage = 1;
    
  }
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
