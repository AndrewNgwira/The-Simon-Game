var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

// Check which button got pressed and save the id of the button
// Event handler on the buttons
$(".btn").click(function(){
// this refers to the actual object that has trigered the event
  var userChosenColor = $(this).attr("id");

  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);

});

function nextSequence() {

  var randomNumber = Math.floor((Math.random() * 4));
  var randomChosenColor = buttonColors[randomNumber];
  // Adding items to the array
  gamePattern.push(randomChosenColor);

  // Selecting the button with the same id as the randomChosenColor
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  // playing sound by calling playSound function and passing it the randomChosenColor
  playSound(randomChosenColor);

}

// function that plays sound
function playSound(name){

  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
}

// AnimatePress function
function animatePress(currentColor){
  
}
