function make_shirt(size: string = "large", text: string = "I am TypeScript") { //default parameters
    console.log(`Making a ${size} t-shirt with the message "${text}" printed on it.`);
}

make_shirt(); // Default large and message
make_shirt("small", "Dive into Coding"); // Custom message, small size