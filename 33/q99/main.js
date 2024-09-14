// Generates a Date object for the next occurrence of a specific birthday
function getNextBirthday(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    // Months are 0-indexed
    var birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        // If the birthday this year has already passed, use next year's date
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
// Replace with your birth month and day
var nextBirthday = getNextBirthday(9, 5);
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
// Shows the date of the next birthday.
