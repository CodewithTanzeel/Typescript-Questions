var Vehicle;
(function (Vehicle) {
    Vehicle[Vehicle["car"] = 0] = "car";
    Vehicle[Vehicle["truck"] = 1] = "truck";
    Vehicle[Vehicle["bicycle"] = 2] = "bicycle";
    Vehicle[Vehicle["airplane"] = 3] = "airplane";
})(Vehicle || (Vehicle = {}));
// console.log(Vehicle.bicycle);
// OR
console.log(Vehicle["bicycle"]);
console.log(Vehicle[2]);
