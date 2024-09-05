function objIteration(carObj) {
    for (var properties in carObj) {
        console.log("".concat(properties, ": ").concat(carObj[properties]));
    }
    ;
}
objIteration({
    make: "Honda",
    model: "Civic",
    year: 2023,
    color: ""
});
