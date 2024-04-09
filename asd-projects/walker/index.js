/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
 
function runProgram(){
  var KEY = {
    "Left": 37,
    "Right": 39,
   "Up": 38,
    "Down": 40
  }
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
 
  // Game Item Objects
  var walker = {
    positionX: 0,
    positionY: 0,
    speedX:0,
    speedY: 0,
  }


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  ($(document).on('keydown', handleKeyDown))
  ($(document).on('keyup', handleKeyup))
                          // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function handleKeyDown(event){
     if (event.which === KEY.Left){
      walker.speedX = -5
    } else if (event.which === KEY.Right){
      walker.speedX = 5
    } else if (event.which === KEY.Down){
      walker.speedY = 5
    } else if (event.which === KEY.Up){
      walker.speedY = -5
    }
  }

  /*
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    wallCollision()
    redrawGameItem()
  }
 
  /*
  Called in response to events.
  */
  function handleKeyup(event){
    if (event.which === KEY.Left){
      walker.speedX = 0
    } else if (event.which === KEY.Right){
      walker.speedX = 0
    } else if (event.which === KEY.Down){
      walker.speedY = 0
    } else if (event.which === KEY.Up){
      walker.speedY = 0

  }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem(){
    walker.positionX = walker.positionX + walker.speedX
    walker.positionY = walker.positionY + walker.speedY
  }
  function redrawGameItem(){
    $("#walker").css("left", walker.positionX);
    $("#walker").css("top", walker.positionY);

  }
boardWandH = $("#board").width()
function wallCollision(){
  if (walker.positionX === 0) {
    walker.positionX -= walker.speedX
    }
  if (walker.positionY === 0) {
    walker.positionY -= walker.speedY
    }
  if (walker.positionX === 390 ) {
    walker.positionX -= walker.speedX
    }
  if (walker.positionY === 390) {
    walker.positionY -= walker.speedY
    }
  }
 
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
 
}