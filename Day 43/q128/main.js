var multiplyParameters = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, number) {
        return total * number;
    }, 1);
};
console.log(multiplyParameters(3, 3, 3)); // 27
