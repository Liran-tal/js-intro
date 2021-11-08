function calcAvg(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}


let avgTeamA = calcAvg(89, 120, 103);
let avgTeamB = calcAvg(116, 94, 123);
let avgTeamC = calcAvg(97, 134, 105);
let winner = '';
let winAvgScore = 0;

if (avgTeamA > avgTeamB) {
    winner = "TeamA";
    winAvgScore = avgTeamA;
}
else if (avgTeamA === avgTeamB) {
    winner = "Tie between TeamA and TeamB";
    winAvgScore = avgTeamA;
}
else {
    winner = "TeamB";
    winAvgScore = avgTeamB;
}

console.log(`winning team: ${winner}, Average score: ${winAvgScore}`);

//*************************** */

if (avgTeamC > winAvgScore) {
    winner = "TeamC";
    winAvgScore = avgTeamC;
}
else if (avgTeamC == winAvgScore) {
    winner = `Tie between ${winner} and TeamC`;
}

console.log(`winning team: ${winner}, Average score: ${winAvgScore}`);
