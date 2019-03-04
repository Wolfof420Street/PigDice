//business logic//

var firstPlayer= ""
    secondPlayer=""
    initialScore= 0
    finalScore=0
    diceSide=""

function PlayerDetails(name, score, totalScore) {
    this.playerNames = name;
    this.playerMarks = score;
    this.totalScores = totalScore;
}
// generating a random dice number //
function dice() {
  diceRoll= Math.floor((Math.random() * 6) + 1);
  return diceRoll
}
//function to check if the user has rolled one//

PlayerDetails.prototype.RegisteringPlayers = function (NextPlayer) {
  if (NextPlayer===1) {
    this.playerMarks=0
  }
  else if (NextPlayer !==1) {
    this.playerMarks= this.playerMarks + NextPlayer
  }
  return this.playerMarks
}

//calculating the total score//
PlayerDetails.prototype.Total = function (total) {
    return this.totalScores = this.totalScores + total;
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
$(".console").hide();
$("button#submit").click(function(event){
player1 = new Player(true);
player2 =  new Player(false);
$(".console").show();

var playerOne = $(".firstOne").val();
$("#playerOne").text(playerOne);

var playerTwo = $(".secondOne").val();
$("#playerTwo").text(playerTwo);

firstPlayer.playerNames=playerOne;
secondPlayer.playerNames=playerTwo;

});
$("button#new-game").click(function(event){
  $(".console").hide();
  clearValues();
  firstPlayer.newGame();
  secondPlayer.newGame();
  $("#dice-roll").empty();
  $("#initialScore").empty();
  $("#cumulativeScore").empty();
  $("#dice-roll-one").empty();
  $("#initialScore-one").empty();
  $("#cumulativeScore-one").empty();

  $(".menu").show();
});

$("button#playerOneroll").click(function(event){
  firstPlayer.initialScore = dice();
  $("#dice-roll").text(firstPlayer.initialScore);
  firstPlayer.RegisteringPlayers();
  $("#initialScore").text(firstPlayer.initialScore);
});

$("button#playerTwoRoll").click(function(event){
  secondPlayer.initialScore = dice();
  $("#dice-roll-one").text(player2.roll);
  secondPlayer.RegisteringPlayers();
});
  $("#cumulativeScore-one").text(player2.initialScore);

$("button#playerOnehold").click(function(event){
  firstPlayer.Total();
  $("#cumulativeScore").text(firstPlayer.totalscore);
  $("#dice-roll").empty();
  $("#initialScore").empty();
  firstPlayer.checkWinner();
});

$("button#playerTwohold").click(function(event){
  secondPlayer.Total();
  $("#cumulativeScore-one").text(secondPlayer.totalscore);
  $("#initialScore-one").empty();
  $("#dice-roll-one").empty();
  player2.winnerCheck();
});
$("#image").diceSide();
  totalScore.diceSide();
});
