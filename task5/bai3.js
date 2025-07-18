// Input:
function printMultiplicationTable() {
  // Xử lý và in ra kết quả
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) { 
        console.log("Bảng cửu chương " + i + ":" + i + " x " + j + " = " + (i * j));
    }
}
}
// Output:
printMultiplicationTable();

// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// ...
// 10 x 8 = 80
// 10 x 9 = 90
// 10 x 10 = 100