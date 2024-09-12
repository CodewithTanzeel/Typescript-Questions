"use strict";
function make_shirt(size = "large", text = "I am TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${text}" printed on it.`);
}
make_shirt(); // Default large and message
make_shirt("small", "Dive into Coding"); // Custom message, small size
