var bobScore = [3,2,6,11,9,2,6,9,10];
var jimboScore =[5,12,9,22,13,7,16,10,11];
var fishScore = [2,2,4,5,4,3,6,4,1];

// accumulator reduces all item into one thing
/* var sum = golf.reduce(function(a,b) {
  return a + b;
}, 0);
console.log(sum);
*/
var coursePar = [3,4,5,5,3,3,4,3,5];

function totalScores (scoreCard) {
    var fullScore = 0;
    var overPar = 0;

    for (var i=0; i < scoreCard.length; i++) {
      if(scoreCard[i] < coursePar[i]) {
        fullScore = fullScore - (coursePar[i] - scoreCard[i]);
      } else if (scoreCard[i] > coursePar[i]) {
        overPar = overPar + (scoreCard[i] - coursePar[i]);
        fullScore = fullScore + (scoreCard[i] - coursePar[i]);
      }
  }
  return [fullScore, overPar];
}
console.log(totalScores(bobScore));
console.log(totalScores(jimboScore));
console.log(totalScores(fishScore));

// similar function to totalScores
function totalScore (scoreCard) {
  var total = 0
  for (var i=0; i < scoreCard.length; i++) {
    total += scoreCard[i];
    //+=  === total = total + scorecard[i]
  }
  return total;
}
console.log(totalScore(bobScore));
console.log(totalScore(jimboScore));
console.log(totalScore(fishScore));
console.log(totalScore(coursePar));

console.log(totalScore(bobScore) - totalScore(coursePar));
console.log(totalScore(jimboScore) - totalScore(coursePar));
