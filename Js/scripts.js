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
