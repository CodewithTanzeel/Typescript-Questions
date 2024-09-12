var animals = ["bat", "dolphine", "owl"];
var characterstics = "mammal and bird ";
animals.forEach(function (animal) {
    console.log("A ".concat(animal, " is ").concat(characterstics));
});
