// Create a new Map called 'countries' where keys are country names (strings) 
// and values are their capitals (also strings).
const countries = new Map<string, string>();

// Set the capital of the USA to "Washington, D.C." in the 'countries' map.
countries.set("USA", "Washington, D.C.");

// Set the capital of France to "Paris" in the 'countries' map.
countries.set("France", "Paris");

// Set the capital of Japan to "Tokyo" in the 'countries' map.
countries.set("Japan", "Tokyo");

// Log the 'countries' map to the console, which will display all country-capital pairs.
console.log(countries);
