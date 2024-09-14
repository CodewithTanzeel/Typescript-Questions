const multiplyParameters = (...numbers: number[]) =>
  numbers.reduce((total, number) => {
    return total * number;
  }, 1);

console.log(multiplyParameters(3, 3, 3)); // 27
