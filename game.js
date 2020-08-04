var currentSequence = [];

$(document).one("keypress", createNextSequence);

function createNextSequence() {
  var colors = ["green", "red", "yellow", "blue"];
  var nextColor = Math.floor(4 * Math.random());
  currentSequence.push(colors[nextColor]);
  console.log(currentSequence[0]);
  playBtnSoundAndAnimate(colors[nextColor]);
}

$(".btn").click(function () {
  playBtnSoundAndAnimate(this.id);
});

function playBtnSoundAndAnimate(activatedBtn) {
  console.log(activatedBtn + " is the activated btn");
  $("#" + activatedBtn).addClass("pressed");
  setTimeout(function () {
    $(".btn").removeClass("pressed");
  }, 50);

  switch (activatedBtn) {
    case "green":
      console.log("Goes to green case");
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
