function multiplyingDecimals(decimal1, decimal2) {
    var result = decimal1 * decimal2;
    return Math.round(result * 100) / 100; // Rounding to 2 decimal places }
}
console.log(multiplyingDecimals(0.1, 0.2));
