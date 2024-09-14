function isDevisableBy2or3(num) {
    return num % 2 === 0 && num % 3 === 0;
}
;
console.log(isDevisableBy2or3(6)); // in 2 and 3
console.log(isDevisableBy2or3(9)); // only in 3
