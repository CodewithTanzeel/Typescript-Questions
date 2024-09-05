var studentsGrade = [80, 48, 34, 90, 76];
var averageGrade = studentsGrade.reduce(function (acc, grades) {
    return acc + grades / studentsGrade.length;
}, 0);
console.log(averageGrade);
