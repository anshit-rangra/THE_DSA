# Counting Bits (LeetCode 338)

Given a non-negative integer n, return an array where each element at index i is the number of 1-bits in the binary representation of i (for all 0 ≤ i ≤ n).

## Approaches

### 1. Brute Force (O(n log n))
- For each number, count set bits by repeatedly right-shifting and using AND (&) to check the last bit.

### 2. Dynamic Programming (O(n))
- Use the relation:
	arr[i] = arr[i >> 1] + (i & 1)
- This means: the count for i is the count for i without its last bit (i >> 1), plus 1 if the last bit is set.

## Example
For n = 5:

| i | binary | count |
|---|--------|-------|
| 0 |  000   |   0   |
| 1 |  001   |   1   |
| 2 |  010   |   1   |
| 3 |  011   |   2   |
| 4 |  100   |   1   |
| 5 |  101   |   2   |

## Complexity
- Time: O(n)
- Space: O(n)