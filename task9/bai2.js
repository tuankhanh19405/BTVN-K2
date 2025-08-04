// Input:
const fruits = [
  "apple",
  "banana",
  "kiwi",
  "kiwi",
  "banana",
  "orange",
  "apple",
  "kiwi",
];

function removeDuplicate(arr) {
  return arr.reduce((acc, item) => {
    const isNaN = typeof item === 'number' && isNaN(item);
    const exists = isNaN
      ? acc.some(i => typeof i === 'number' && isNaN(i))
      : acc.includes(item);
    if (!exists) {
      acc.push(item);
    }
    return acc;
  }, []);
}


// Output:
const result = removeDuplicate(fruits);
console.log(result); // ["apple", "banana", "kiwi", "orange"]