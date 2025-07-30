const arrayWords = ["Hello world", "JS is fun", "Arrays and strings"];
function countTotalWords(arr) {
  return arr.reduce((total, str) => total + str.split(" ").length, 0);
}

// Test
console.log(countTotalWords(["Hello world", "JS is fun", "Arrays and strings"])); // 8
