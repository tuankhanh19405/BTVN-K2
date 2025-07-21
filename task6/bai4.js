// Input:
function findMinMaxAverage(arr) {
  if (arr.length === 0) return null;
  
  let max = arr[0], maxIndex = 0, min = arr[0], minIndex = 0;
  let primeSum = 0, primeCount = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
    if (isPrime(arr[i])) {
      primeSum += arr[i];
      primeCount++;
    }
  }
  
  let primeAverage = primeCount > 0 ? Number((primeSum / primeCount).toFixed(2)) : null;
  console.log(`Max: ${max}, Max Index: ${maxIndex}, Min: ${min}, Min Index: ${minIndex}, Prime Average: ${primeAverage}`);
  
  return {
    max,
    maxIndex,
    min,
    minIndex,
    primeAverage
  };
}
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
// Output:
findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6]); // Output: {max: 9, maxIndex: 5, min: 1, minIndex: 1, primeAverage: 3.33 }
findMinMaxAverage([5, 5, 2, 2, 1]); // Output: {max: 5, maxIndex: 0, min: 1, minIndex: 4, primeAverage: 3.5 }
findMinMaxAverage([-3, 7, -8, 11, 0]); // Output: {max: 11, maxIndex: 3, min: -8, minIndex: 2, primeAverage: 9 }