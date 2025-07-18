function printChristmasTree(n, char) {
  if (!Number.isInteger(n) || n <= 0 || n >= 100 || typeof char !== 'string' || char.length !== 1) {
    console.log("Dữ liệu không hợp lệ.");
    return;
  }

  function repeatChar(ch, count) {
    let result = '';
    for (let i = 0; i < count; i++) {
      result += ch;
    }
    return result;
  }

  for (let i = 1; i <= n; i++) {
    let space = repeatChar(' ', n - i);
    let leaf = repeatChar(char, 2 * i - 1);
    console.log(space + leaf);
  }

  let trunk = repeatChar(' ', n - 1) + char;
  console.log(trunk);
}



// Input 1:
printChristmasTree(5, "*");

// Output 1:

//     *
//    ***
//   *****
//  *******
// *********
//     *

// Input 2:
printChristmasTree(4, "o");

// Output 2:

//    o
//   ooo
//  ooooo
// ooooooo
//    o