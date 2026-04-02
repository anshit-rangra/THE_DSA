# Insertion Sort

Insertion Sort is a simple comparison-based sorting algorithm that builds the final sorted array one item at a time. It is efficient for small datasets and mostly sorted arrays.

## How it Works
1. Iterate from the second element to the end of the array.
2. For each element, compare it with the elements before it.
3. Shift larger elements one position to the right to make space.
4. Insert the current element into its correct position.

## Time Complexity
- Best: $O(n)$ (when the array is already sorted)
- Average, Worst: $O(n^2)$

## Space Complexity
- $O(1)$ (in-place)

## When to Use
- Small datasets
- Nearly sorted arrays
- When simplicity is preferred over performance

## Example
Input: [5, 2, 4, 6, 1, 3]
Output: [1, 2, 3, 4, 5, 6]

---

See `code.js` for implementation.