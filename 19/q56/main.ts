let mixItems = [1, "mango", 3, "orange", 6, "apple"];

let onlyString = mixItems.filter((item) => typeof item === "string");

console.log(mixItems); // Mix items
console.log(onlyString); // Only string
