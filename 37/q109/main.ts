// Create a new Date object representing the current date and time.
const currentTime = new Date();

// Check if the current hour is 12 or greater (i.e., PM hours).
if(currentTime.getHours() >= 12) {
    // If the current hour is 12 or later, log "Good Morning" to the console.
    console.log("Good Morning");
} 
else {
    // If the current hour is before 12, log "Not Showing" to the console.
    console.log("Not Showing");
}
