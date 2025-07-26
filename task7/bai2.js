function findSecondLargestNumber(arr) {
  // Nếu mảng không hợp lệ hoặc không đủ phần tử
  if (!Array.isArray(arr) || arr.length < 2) {
    return -1;
  }

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num > max) {
      secondMax = max;
      max = num;
    } 
    else if (num > secondMax && num < max) {
      secondMax = num;
    }
  }

  return secondMax === -Infinity ? -1 : secondMax;
}

// Test
console.log(findSecondLargestNumber([1, 2, 3, 4, 5])); // 4
console.log(findSecondLargestNumber([1, 1, 1]));       // -1
console.log(findSecondLargestNumber([1]));             // -1
console.log(findSecondLargestNumber([5, 5, 2, 5, 4])); // 4
