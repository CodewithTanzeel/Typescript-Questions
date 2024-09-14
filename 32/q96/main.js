var numbers = [2, 4, 8, 12, 16, 18];
var newArray = numbers.reduce(function (sum, total) { return sum += total; }, 0);
console.log(newArray);
