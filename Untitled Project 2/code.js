var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4777f0ae-3439-4d82-b987-ce096ca7a562","87a21c5e-bdbe-4603-b44f-0402f924b0ac"],"propsByKey":{"4777f0ae-3439-4d82-b987-ce096ca7a562":{"name":"barco","sourceUrl":null,"frameSize":{"x":75,"y":75},"frameCount":2,"looping":true,"frameDelay":12,"version":"Vak0QRP10E0JSquSpAp.QeFuMQ_Da5zc","loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":150},"rootRelativePath":"assets/4777f0ae-3439-4d82-b987-ce096ca7a562.png"},"87a21c5e-bdbe-4603-b44f-0402f924b0ac":{"name":"bg","categories":["backgrounds"],"frameCount":1,"frameSize":{"x":400,"y":385},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 18:38:33 UTC","pngLastModified":"2021-01-05 18:39:11 UTC","version":"bd70yXmt3QhSWOcEF8grNZiWfnsKW4d8","sourceUrl":"assets/api/v1/animation-library/gamelab/bd70yXmt3QhSWOcEF8grNZiWfnsKW4d8/category_backgrounds/bg_landscape10.png","sourceSize":{"x":400,"y":385},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/bd70yXmt3QhSWOcEF8grNZiWfnsKW4d8/category_backgrounds/bg_landscape10.png"}}};
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

var bg=createSprite(200,200,400,400);
  bg.setAnimation("bg");
var barco=createSprite(200,112.5,75,75);
  barco.setAnimation("barco");
  barco.velocityX=4;
function draw()
{
  background("white");
  
  if(barco.x<=50)
  {
    barco.velocityX=4;
  }
  else if(barco.x>=350)
  {
    barco.velocityX=-4;
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
