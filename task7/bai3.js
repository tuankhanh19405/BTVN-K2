const students = [
  { name: "An", scores: [8, 7.5, 9] },
  { name: "Bình", scores: [6, 5.5, 7] },
  { name: "Chi", scores: [9, 9.5, 10] },
];

function calculateAverage(students) {
  return students.map(student => {
    let total = 0;
    // Tính tổng điểm bằng vòng lặp for
    for (let i = 0; i < student.scores.length; i++) {
      total += student.scores[i];
    }
    // Tính trung bình
    let average = total / student.scores.length;
    // Làm tròn 1 chữ số thập phân
    average = Math.round(average * 10) / 10;

    return {
      name: student.name,
      average: average
    };
  });
}

const result = calculateAverage(students);
console.log(result);
// [
//   { name: "An", average: 8.2 },
//   { name: "Bình", average: 6.2 },
//   { name: "Chi", average: 9.5 }
// ]
