function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
// adds 5
var addFive = makeAdder(5);
console.log(addFive(10)); // If we put 10 in the box, it gives us 15
