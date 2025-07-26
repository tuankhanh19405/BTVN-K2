function findCommonElement(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Dữ liệu không hợp lệ";
  }

  // Bước 1: Loại bỏ phần tử trùng trong từng mảng (thủ công)
  function removeDuplicate(arr) {
    const uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
      }
    }
    return uniqueArr;
  }

  const uniqueArr1 = removeDuplicate(arr1);
  const uniqueArr2 = removeDuplicate(arr2);

  // Bước 2: Tìm phần tử chung
  const common = [];
  for (let i = 0; i < uniqueArr1.length; i++) {
    for (let j = 0; j < uniqueArr2.length; j++) {
      if (uniqueArr1[i] === uniqueArr2[j]) {
        common.push(uniqueArr1[i]);
        break; // tránh bị thêm trùng
      }
    }
  }

  // Bước 3: Trả kết quả
  if (common.length === 0) {
    return false;
  }
  return common.join(" ");
}

// Test
console.log(findCommonElement([1, 2, 3], [2, 3, 4]));        // "2 3"
console.log(findCommonElement([1, 2, 3], [4, 5, 6]));        // false
console.log(findCommonElement([1, 2, 2, 3, 4], [2, 3, 4, 5])); // "2 3 4"
