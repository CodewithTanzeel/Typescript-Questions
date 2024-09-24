function season(month: number) {
  // Function to determine the season based on the given month number

  switch (month) {
      // Evaluating the input number 'month'
      case 12: // December
      case 1:  // January
      case 2:  // February
          console.log("Winter"); // If month is December, January, or February, log "Winter"
          break; // Exit the switch block
      
      case 3:  // March
      case 4:  // April
      case 5:  // May
          console.log("Spring"); // If month is March, April, or May, log "Spring"
          break; // Exit the switch block
      
      case 6:  // June
      case 7:  // July
      case 8:  // August
          console.log("Summer"); // If month is June, July, or August, log "Summer"
          break; // Exit the switch block
      
      case 9:  // September
      case 10: // October
      case 11: // November
          console.log("Autumn"); // If month is September, October, or November, log "Autumn"
          break; // Exit the switch block
      
      default:
          console.log("Invalid month number"); // Log error message for invalid input
  }
}

// Example call to the function
season(6); // Outputs: Summer
