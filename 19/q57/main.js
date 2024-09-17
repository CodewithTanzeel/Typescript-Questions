var studentsGrade = [80, 48, 43, 80, 76];
var averageGrade = studentsGrade.reduce(function (acc, grades) {
    return acc + grades / studentsGrade.length;
}, 0);
console.log(averageGrade);
