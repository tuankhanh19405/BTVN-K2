let n = Number(prompt("Nhập số số dòng:"));
let char = prompt("Nhập ký tự để vẽ cây thông:");

function printChristmasTree(n, char) {
  if (!Number.isInteger(n) || n <= 0 || n >= 100 || typeof char !== 'string' || char.length !== 1) {
    console.log("Dữ liệu không hợp lệ.");
    return;
  }

  

  for (let i = 1; i <= n; i++) {
    let space = repeatChar(' ', n - i);
    let leaf = repeatChar(char, 2 * i - 1);
    console.log(space + leaf);
  }

  let trunk = repeatChar(' ', n - 1) + char;
  console.log(trunk);
}

function repeatChar(ch, count) {
    let result = '';
    for (let i = 0; i < count; i++) {
      result += ch;
    }
    return result;
  }



printChristmasTree(n, char);;



