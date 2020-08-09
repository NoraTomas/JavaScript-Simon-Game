var currentSequence = [];
var userSequence = [];
var userMoveIndex = -1;

$(document).one("keypress", startGame);

function createNextSequence() {
  emptyUserSequence();
  var colors = ["green", "red", "yellow", "blue"];
  var nextColor = Math.floor(4 * Math.random());
  currentSequence.push(colors[nextColor]);
  playNextInSequence();
}

function emptyUserSequence() {
  userSequence = [];
  console.log("User sequence emptied, look: " + JSON.stringify(userSequence));
}

$(".btn").click(function () {
  playBtnSoundAndAnimate(this.id);
  userSequence.push(this.id);
  userMoveIndex++;
  didUserLose();
});

function startGame() {
  var colors = ["green", "red", "yellow", "blue"];
  var nextColor = Math.floor(4 * Math.random());
  currentSequence.push(colors[nextColor]);
  playBtnSoundAndAnimate(currentSequence[0]);
}

function playNextInSequence() {
  var last = currentSequence.length - 1;
  randomChosenColour = currentSequence[last];
  setTimeout(function () {
    playBtnSoundAndAnimate(randomChosenColour);
  }, 2000);
}

function didUserLose() {
  if (JSON.stringify(userSequence) === JSON.stringify(currentSequence)) {
    createNextSequence();
    console.log("Did not lose!");
    console.log("Usersequence " + JSON.stringify(userSequence));
    console.log("Currentsequence " + JSON.stringify(currentSequence));
  } else if (userSequence.length < currentSequence.length) {
    console.log("Waiting for next move!");
    console.log("Usersequence " + JSON.stringify(userSequence));
    console.log("Currentsequence " + JSON.stringify(currentSequence));
  } else {
    console.log("You lost!");
  }
}

function playBtnSoundAndAnimate(activatedBtn) {
  $("#" + activatedBtn).addClass("pressed");
  setTimeout(function () {
    $(".btn").removeClass("pressed");
  }, 50);

  switch (activatedBtn) {
    case "green":
      const greenAudio = new Audio("sounds/green.mp3");
      greenAudio.play();
      break;
    case "red":
      const redAudio = new Audio("sounds/red.mp3");
      redAudio.play();
      break;
    case "yellow":
      const yellowAudio = new Audio("sounds/yellow.mp3");
      yellowAudio.play();
      break;
    case "blue":
      const blueAudio = new Audio("sounds/blue.mp3");
      blueAudio.play();
      break;

    default:
      break;
  }
}
