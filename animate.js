/**
 *  handleShipAnimation moves the ship based on its direction and
 *    keyboard control
 *
 */
function handleShipAnimation() {
  if (CONTROLS.ship.forward) {
    var radians = (Math.PI / 180) * SPACE_SHIP.rotation,
        cos = Math.cos(radians),
        sin = Math.sin(radians);
    SPACE_SHIP.x += SPACE_SHIP.speed * sin;
    SPACE_SHIP.y +=  SPACE_SHIP.speed * cos;
  }
  if (CONTROLS.ship.backward) {
    var radians = (Math.PI / 180) * SPACE_SHIP.rotation,
        cos = Math.cos(radians),
        sin = Math.sin(radians);
    SPACE_SHIP.x -= SPACE_SHIP.speed * sin;
    SPACE_SHIP.y -=  SPACE_SHIP.speed * cos;
  }
  if (CONTROLS.ship.rotateClockwise) {
    SPACE_SHIP.rotation -= 5;
  }
  if (CONTROLS.ship.rotateCounterClockwise) {
    SPACE_SHIP.rotation += 5;
  }

  // Check if asteroid is leaving the boundary, if so, switch sides
  if (SPACE_SHIP.x > GAME.canvas.width) {
    SPACE_SHIP.x = 0;
  } else if (SPACE_SHIP.x < 0) {
    SPACE_SHIP.x = 600;
  } else if (SPACE_SHIP.y > GAME.canvas.height) {
    SPACE_SHIP.y = 0;
  } else if (SPACE_SHIP.y < 0) {
    SPACE_SHIP.y = 300;
  }
}
//Makes rectangle that moves diagonally across screen
function RenderNewObject(context) {
    context.fillRect (SQUARE_COORDINATES.x, 0, 50, randomStuff.x);
    context.fillRect (SQUARE_COORDINATES.x2, randomStuff.heightOnCanvas, 50, randomStuff.height * 100);
    if (SQUARE_COORDINATES.x <= 0 || SQUARE_COORDINATES.x2 <= 0){
      SQUARE_COORDINATES.x = 550;
      SQUARE_COORDINATES.x2 = 550;
      howFast.fastOne = howFast.fastOne + 2;
      SPACE_SHIP.speed = SPACE_SHIP.speed + 2;
      if (howFast.fastOne >= 20){
        howFast.fastOne = howFast.fastOne - 2;
        SPACE_SHIP.speed = SPACE_SHIP.speed - 2;
      }
      randomStuff.x = Math.floor ((Math.random () * 100) + 50);
      randomStuff.heightOnCanvas =  300 - Math.floor ((Math.random () * 100) + 50);
      randomStuff.height = Math.floor ((Math.random () * 100) + 50);
    }

}

function HandleNewObjectMovement() {
  SQUARE_COORDINATES.x -= howFast.fastOne;
  SQUARE_COORDINATES.x2 -= howFast.fastOne;
}

function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {

    // 1 - Reposition the objects
    handleShipAnimation();
    HandleNewObjectMovement();

    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 600, 300);

    // 3 - Draw new items
    RenderSpaceship(context);
    RenderNewObject(context);

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
