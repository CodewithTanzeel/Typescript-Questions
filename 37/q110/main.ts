/**
 * Function to determine and print the grade based on the given score.
 * @param score - The score for which the grade needs to be determined.
 */
function gradeFinder(score: number) {
    // Check if the score is between 90 and 100 for grade A
    if(score >= 90 && score <= 100) {
        console.log("You got A");
    }
    // Check if the score is between 80 and 89 for grade B
    else if(score >= 80 && score <= 89) {
        console.log("You got B");
    }
    // Check if the score is between 70 and 79 for grade C
    else if(score >= 70 && score <= 79) {
        console.log("You got C");
    }
    // Check if the score is between 60 and 69 for grade D
    else if(score >= 60 && score <= 69) {
        console.log("You got D");
    }
    // If the score is 59 or less, it's a failing grade
    else if(score <= 59) {
        console.log(`Oops! You are fail: ${score}`);
    }
    // If the score is out of the valid range, display an error message
    else {
        console.log("Invalid Score");
    }
}

// Call the function with a score of 76
gradeFinder(76); // Output: You got C
