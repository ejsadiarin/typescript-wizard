function maxSumSubarray(arr: number[], windowSize: number): number {
  if (windowSize > arr.length) {
    throw new Error("Window size should be less than or equal to the array length");
  }

  let maxSum = 0;
  let currentSum = 0;

  // Calculate the sum of the first window
  for (let i = 0; i < windowSize; i++) {
    currentSum += arr[i];
  }

  // Initialize maxSum with the sum of the first window
  maxSum = currentSum;

  // Move the window and update the sums
  for (let i = windowSize; i < arr.length; i++) {
    // Add the next element to the current sum
    currentSum += arr[i];

    // Subtract the first element of the previous window
    currentSum -= arr[i - windowSize];

    // Update maxSum if the currentSum is greater
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage
const array = [1, 4, 2, 10, 2, 3, 1, 0, 20];
const windowSize = 3;
const result = maxSumSubarray(array, windowSize);
console.log(result); // Output: 21
