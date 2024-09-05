var mixItems = [1, "mango", 3, "orange", 5, "apple"];
var onlyString = mixItems.filter(function (item) { return typeof item === "string"; });
console.log(mixItems); // Mix items
console.log(onlyString); // Only string
