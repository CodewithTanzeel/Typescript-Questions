function objIteration(carObj: object) {

    for(let properties in carObj) {
        console.log(`${properties}: ${carObj[properties]}`)
    };
}

objIteration(
    {
        make: "Honda",
        model: "Civic",
        year: 2023,
        color: ""
    }
);