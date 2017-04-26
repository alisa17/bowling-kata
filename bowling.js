// dummy variable

var testGame = [
  [1, 2],
  [6, 4],
  [5, 4],
  [10, 0],
  [7, 2],
  [10, 0],
  [10, 0],
  [5, 2],
  [7, 0],
  [4, 4]
]


function calculateScore(allFrames) {
  var totalScore = 0;
  for (var frame = 0; frame < allFrames.length; frame++) {
    if (calculateFrameScore(allFrames[frame]) == 10) {
      if (allFrames[frame][0] == 10) { //strike
        totalScore += calculateFrameScore(allFrames[frame])
          if(allFrames[frame+1][0] == 10)
          {
            totalScore += calculateFrameScore(allFrames[frame+1])
            totalScore += allFrames[frame+2][0]
          }
          else{
        totalScore += calculateFrameScore(allFrames[frame+1])
      }

      }
      else{ //spare
        totalScore += calculateFrameScore(allFrames[frame])
        totalScore += allFrames[frame+1][0]
      }
    }

    else { //neither spare nor strike
      totalScore += calculateFrameScore(allFrames[frame]);
    }

  }
  return totalScore;
}

function calculateFrameScore(oneFrame) {
  return oneFrame.reduce(function(a, b) {
    return a + b;
  }, 0);
}

console.log(calculateScore(testGame));
