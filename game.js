$(".btn").click(function () {
  console.log(this.id);
  $(this).addClass("pressed");
  setTimeout(function () {
    $(".btn").removeClass("pressed");
  }, 50);

  switch (this.id) {
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
});
