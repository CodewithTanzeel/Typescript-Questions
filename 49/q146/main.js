function mainFunc(callback) {
    console.log("Filter Numbers");
    var numbers = [1, 2, 3, 4, 5, 6];
    console.log(numbers);
    callback(numbers);
}
function filterArray(numbers) {
    var filter = numbers.filter(function (num) { return num % 2 === 1; });
    console.log(filter);
}
mainFunc(filterArray);
