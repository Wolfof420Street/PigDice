//business logic//

var firstPlayer= ""
    secondPlayer=""
    initialScore= 0
    finalScore=0
    diceSide=""

function PlayerDetails(name) {
    this.playerNames = name;
    this.playerMarks = initialScore;
    this.totalScores = finalScore;
}
// generating a random dice number //
function dice() {
  initialScore= Math.floor((Math.random() * 6) + 1);
  return initialScore
}
//function to check if the user has rolled one//

PlayerDetails.prototype.oneRoll = function () {
  if (initialScore===1) {
    this.playerMarks=0
  }
  else if (initialScore !==1) {
    this.playerMarks= this.playerMarks + initial score
  }
  return this.playerMarks
}

//calculating the total score//
PlayerDetails.prototype.Total = function () {
    return this.totalScores = this.totalScores + finalScore;
}

// checking for the winner //
PlayerDetails.prototype.checkWinner =function () {
  if (this.totalScores===100)
  alert ("Congratulations"+this.playerNames+"You are the roll model")

}

//displaying the dice roll//
var diceImage = function (Input) {
  if (Input == 1) diceSide = "Images/one.jpg";
   else if (Input == 2) diceSide = "Images/two.jpg";
   else if (Input == 3) diceSide = "Images/three.jpg";
   else if (Input == 4) diceSide = "Images/four.jpg";
   else if (Input == 5) diceSide = "Images/five.jpeg";
   else if (Input == 6) diceSide = "Images/six.jpeg";

   return diceSide
}

// refreshing the page//
function clearValues = function () {
  this.playerMarks=0;
  this.playerNames="";
  this.totalScore=0;
};

//User Interface//
$(document).ready(function() {
$("#play-game").hide();
$("button#submit").click(function(event){

  var firstPlayer = $(".firstOne").val();
  $("#playerOne").text(playerNames.firstPlayer);

  var secondPlayer = $(".secondOne").val();
  $("#playerTwo").text(playerNames.secondPlayer);
});
  $("play-game").show()

$("button#new-game").click(function(event){
  $("#play-game").hide();
  clearValues();
  firstPlayer.newGame();
  secondPlayer.newGame();
  $("#dice-roll").empty();
  $("#initialScore").empty();
  $("#cumulativeScore").empty();
  $("#dice-roll-one").empty();
  $("#initialScore-one").empty();
  $("#cumulativeScore-one").empty();
});
$("button#playerOneroll").click(function(event){
  initialScore = dice();
  $("#dice-roll").text(initialScore);
  initialScore.oneRoll();
  $("#initialScore").text(initialScore);
});

$("button#playerTwoRoll").click(function(event){
  initialScore = dice();
  $("#dice-roll-one").text(initialScore);
  secondPlayer.oneRoll();
});
  $("#cumulativeScore-one").text(initialScore);

$("button#playerOnehold").click(function(event){
  finalScore.Total();
  $("#cumulativeScore").text(finalScore);
  $("#dice-roll").empty();
  $("#initialScore").empty();
  finalScore.checkWinner();
});

$("button#playerTwohold").click(function(event){
  finalScore.Total();
  $("#cumulativeScore-one").text(finalScore);
  $("#initialScore-one").empty();
  $("#dice-roll-one").empty();
  player2.winnerCheck();
});
$("#image").diceSide();
  totalScore.diceSide();
});
