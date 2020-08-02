$("#green").click(function () {
  const greenAudio = new Audio("sounds/green.mp3");
  greenAudio.play();
  $("#green").addClass("pressed");
  setTimeout(function () {
    $("#green").removeClass("pressed");
  }, 50);
});
