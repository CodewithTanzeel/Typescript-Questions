let studentsGrade: number[] = [80, 48, 43, 80, 76];

let averageGrade = studentsGrade.reduce((acc, grades) => {
  return acc + grades / studentsGrade.length;
}, 0);

console.log(averageGrade);
