const numbers: number[] = [2, 4, 8, 12, 16, 18];

const newArray = numbers.reduce((sum, total) => sum += total, 0)

console.log(newArray)