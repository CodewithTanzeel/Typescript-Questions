function AvgScoreFinder(...scores: number[]) {
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

console.log(AvgScoreFinder(90,90,34,34));