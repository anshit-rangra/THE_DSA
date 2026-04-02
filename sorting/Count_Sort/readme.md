# Count Sort

Count Sort is a non-comparison-based sorting algorithm that works efficiently when the range of input data is not significantly greater than the number of objects to be sorted. It counts the number of occurrences of each unique element and uses this information to place each element in its correct position in the output array.

## How it Works
1. Find the maximum value in the input array to determine the range of the count array.
2. Initialize a count array with all zeros.
3. Store the count of each element at its respective index in the count array.
4. Modify the count array by adding the previous counts (cumulative sum).
5. Build the output array by placing elements at their correct positions.

## Time Complexity
- Best, Average, Worst: $O(n + k)$
  - $n$ = number of elements
  - $k$ = range of input

## Space Complexity
- $O(n + k)$

## When to Use
- When the range of input data ($k$) is not significantly larger than the number of elements ($n$).
- Not suitable for sorting large ranges with few elements.

## Example
Input: [4, 2, 2, 8, 3, 3, 1]
Output: [1, 2, 2, 3, 3, 4, 8]

---

See `code.js` for implementation.