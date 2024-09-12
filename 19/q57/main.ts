let studentsGrade: number[] = [80, 48, 34, 90, 76];

let averageGrade = studentsGrade.reduce((acc, grades) => {
    return acc + grades / studentsGrade.length;
}, 0)

console.log(averageGrade)