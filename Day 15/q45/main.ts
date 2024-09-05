function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car = { manufacturer, model};

    options.forEach(([key, value]) => car.model = value);
    return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));