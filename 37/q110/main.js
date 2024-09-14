function gradeFinder(score) {
    if (score >= 90 && score <= 100) {
        console.log("You got A");
    }
    else if (score >= 80 && score <= 89) {
        console.log("You got B");
    }
    else if (score >= 70 && score <= 79) {
        console.log("You got C");
    }
    else if (score >= 60 && score <= 69) {
        console.log("You got D");
    }
    else if (score <= 59) {
        console.log("Oops! You are fail: ".concat(score));
    }
    else {
        console.log("Invalid Score");
    }
}
gradeFinder(76);
