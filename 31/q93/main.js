function replacingElements(fruits) {
    var index = fruits.indexOf("Banana");
    if (index !== -1)
        fruits[index] = "Mango";
}
var fruits = ["Apple", "Banana", "Mango"];
replacingElements(fruits);
console.log(fruits);
