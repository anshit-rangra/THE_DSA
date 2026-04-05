

## Best Time to Buy and Sell Stock

### Brute Force Approach
Use a nested loop to check every possible pair of buy and sell days. For each pair, calculate the difference and keep track of the maximum profit found.

**Time Complexity:** $O(n^2)$

### Optimal Approach (O(n) Time)
1. Initialize two variables:
	- `MAX = 0` (to store the maximum profit)
	- `MinVal = arr[0]` (to store the minimum price seen so far)
2. Loop from the second element to the last element of the array:
	- If the current price is less than `MinVal`, update `MinVal`.
	- Otherwise, update `MAX` to be the maximum of `MAX` and `arr[i] - MinVal`.
3. After the loop, `MAX` contains the maximum profit.

**Explanation:**
- The goal is to always keep track of the lowest price so far (`MinVal`).
- For each price, check if selling at that price (after buying at `MinVal`) gives a better profit than the current `MAX`.
- This ensures a single pass through the array with $O(n)$ time complexity.