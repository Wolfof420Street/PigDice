//business logic//

var firstPlayer= ""
    secondPlayer=""
    initialScore= 0
    finalScore=0

function PlayerDetails(name, score, totalScore) {
    this.playerNames = name;
    this.playerMarks = score;
    this.totalScores = totalScore;
}
function dice() {
  diceRoll= Math.floor((Math.random() * 6) + 1);
  return diceRoll
}
PlayerDetails.prototype.RegisteringPlayers = function (NextPlayer) {
  if (NextPlayer===1) {
    this.playerMarks=0
  }
  else if (NextPlayer !==1) {
    this.playerMarks= this.playerMarks + NextPlayer    
  }

}
