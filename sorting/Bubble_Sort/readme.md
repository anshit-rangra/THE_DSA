in this apprach we create an imaginary bubble j and j+1 we check who is bigger between these and then we swap
in this approach every iteration will sort the element of the array from right to left

# Bubble Sort

Bubble Sort is a simple sorting algorithm used to arrange the elements of an array in a specific order (usually ascending or descending).

## How it Works

- The algorithm repeatedly steps through the array.
- It compares each pair of adjacent elements (at positions `j` and `j+1`).
- If the element at `j` is greater than the element at `j+1`, they are swapped.
- This process is repeated for each element, causing larger elements to "bubble" to the end of the array with each pass.

With each iteration, the next largest element is placed in its correct position from right to left.

## Example

Given an array: `[5, 2, 9, 1, 5, 6]`

After applying Bubble Sort, the array becomes: `[1, 2, 5, 5, 6, 9]`

## Time Complexity

- Worst and Average Case: $O(n^2)$
- Best Case (already sorted): $O(n)$

## Space Complexity

- $O(1)$ (in-place sorting)