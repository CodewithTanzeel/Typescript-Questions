var laptop = {
    make: "Hp",
    model: "ProBook",
    year: 2024,
    describe: function () {
        console.log("The laptop is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
    }
};
laptop.describe();
