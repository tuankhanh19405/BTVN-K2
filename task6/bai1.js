// Input:
function cleanFalsyValues(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  console.log(result);
  return result;
}
// Output:
cleanFalsyValues([1, 0, "", null, "hello", undefined, NaN, 2, 3]); 