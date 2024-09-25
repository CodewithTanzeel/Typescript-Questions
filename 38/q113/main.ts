// Create a new Map called 'countries' where the key is the country name (string) 
// and the value is the capital city (string).
const countries = new Map<string, string>();

// Add the USA and its capital "Washington, D.C." to the 'countries' map.
countries.set("USA", "Washington, D.C.");

// Add France and its capital "Paris" to the 'countries' map.
countries.set("France", "Paris");

// Add Japan and its capital "Tokyo" to the 'countries' map.
countries.set("Japan", "Tokyo");

// Log the entire 'countries' map to the console.
console.log(countries);

/**
 * Function to log the capital of Canada.
 * If the 'countries' map contains the key "Canada", it logs the capital of Canada.
 * Otherwise, it logs a message indicating the absence of Canada's entry in the map.
 * 
 * @param countries - A map containing country-capital pairs.
 */
function logCapitalOfCanada(countries: Map<string, string>): void {
  // Check if "Canada" exists in the 'countries' map.
  if (countries.has("Canada")) {
    // If it exists, log "Canada".
    console.log("Canada");
  } else {
    // If it doesn't exist, log a message indicating the capital of Canada.
    console.log(`The capital of Canada is ${countries.get("Canada")}`);
  }
}

// Call the function to log the capital of Canada.
logCapitalOfCanada(countries);
