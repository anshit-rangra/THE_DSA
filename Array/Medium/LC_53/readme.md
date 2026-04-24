## Maximum Subarray (Kadane's Algorithm)

To solve the Maximum Subarray problem efficiently, use **Kadane's Algorithm**. This approach finds the largest sum of a contiguous subarray in linear time.

### Steps:
1. **Initialize two variables:**
   - `maxSum` to `-Infinity` (to handle arrays with all negative numbers)
   - `currentSum` to `0`
2. **Iterate through the array:**
   - For each element, add it to `currentSum`.
   - Update `maxSum` to be the maximum of `maxSum` and `currentSum`.
   - If `currentSum` becomes less than `0`, reset `currentSum` to `0` (since a negative sum will not help future subarrays).
3. **Return `maxSum`** as the result.

### Pseudocode:

```
maxSum = -Infinity
currentSum = 0
for num in array:
	currentSum += num
	if currentSum > maxSum:
		maxSum = currentSum
	if currentSum < 0:
		currentSum = 0
return maxSum
```

This algorithm runs in $O(n)$ time and is optimal for this problem.