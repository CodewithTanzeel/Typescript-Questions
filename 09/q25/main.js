// QUESTION #25:
// The below code will be compile because the condition id true
var alien_color = "green";
if (alien_color === "green") {
    console.log("You got 5 stars!");
}
// The below code will not be executed because the condition is false
alien_color = "red";
if (alien_color == "green") {
    // No output because the condition is false
    console.log("You got 0 points");
}
