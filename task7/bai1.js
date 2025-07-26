function checkSymmetricalArr(arr) {
  if (!Array.isArray(arr)) {
    return "Dữ liệu không hợp lệ";
  }

  if (arr.length === 1) {
    return "Mảng có 1 phần tử, không kiểm tra được";
  }

  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Test
console.log(checkSymmetricalArr([1, 2, 3, 4, 3, 2, 1])); // true
console.log(checkSymmetricalArr([1]));                  // "Mảng có 1 phần tử, không kiểm tra được"
console.log(checkSymmetricalArr("abc"));                // "Dữ liệu không hợp lệ"
console.log(checkSymmetricalArr([1, 2, 3]));            // false
