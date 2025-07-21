// Input:
function filterLongStrings(arr) {
  // Xử lý và in ra kết quả
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 5) {
            result.push(arr[i]);
        }

}
    console.log(result);
    return result;  
}

// Output:
filterLongStrings(["hello", "world", "javascript", "nodejs"]); // Output: ["javascript", "nodejs"]
filterLongStrings(["hi", "hello world", "a b c", "goodbye!!"]); // Output: ["hello world", "goodbye!!"]
filterLongStrings(["hi", "bye", "yes"]); // Output: []