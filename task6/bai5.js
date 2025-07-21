// Input:
function insertNumber(arr, num) {
  // Lọc các giá trị là số và không phải NaN
  let validNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
      validNumbers.push(arr[i]);
    }
  }
  
  // Sắp xếp mảng theo thứ tự tăng dần
  for (let i = 0; i < validNumbers.length - 1; i++) {
    for (let j = i + 1; j < validNumbers.length; j++) {
      if (validNumbers[i] > validNumbers[j]) {
        let temp = validNumbers[i];
        validNumbers[i] = validNumbers[j];
        validNumbers[j] = temp;
      }
    }
  }
  
  // Nếu num không phải là số hoặc là NaN, trả về mảng đã sắp xếp
  if (typeof num !== 'number' || isNaN(num)) {
    return validNumbers;
  }
  
  // Chèn num vào vị trí thích hợp
  let result = [];
  let inserted = false;
  for (let i = 0; i < validNumbers.length; i++) {
    if (!inserted && num < validNumbers[i]) {
      result.push(num);
      inserted = true;
    }
    result.push(validNumbers[i]);
  }
  
  // Nếu num chưa được chèn (num lớn hơn tất cả phần tử), chèn vào cuối
  if (!inserted) {
    result.push(num);
  }
  console.log(result)
  return result;
}

// Output:
insertNumber([1, 3, 5, 7, 9], 6); // Output: [1, 3, 5, 6, 7, 9]
insertNumber([3, "hello", 1, NaN, 4, null], 2); // Output: [1, 2, 3, 4]
insertNumber([], 5); // Output: [5]
insertNumber([-1, 10, -5, "abc"], -3); // Output: [-5, -3, -1, 10]
insertNumber([5, 2, 8], NaN); // Output: [2, 5, 8]