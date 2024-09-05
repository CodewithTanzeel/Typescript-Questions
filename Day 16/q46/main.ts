const laptop = {
    make: "Hp",
    model: "ProBook",
    year: 2024,
    describe(): void {
        console.log(`The laptop is a ${this.year} ${this.make} ${this.model}.`)
    }
};

laptop.describe();