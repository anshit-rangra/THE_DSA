
# LeetCode 201: Bitwise AND of Numbers Range

## Problem
Given a range [left, right], find the bitwise AND of all numbers in this range (inclusive).

## Approaches

### 1. Optimal Approach
Instead of checking every number, we can optimize by reducing the right boundary quickly:
- Update `right` as: `right = right & (right - 1)`
- Repeat until `right <= left`.
- The answer is `left & right`.

This works because each time we do `right & (right - 1)`, we remove the lowest set bit from right, quickly converging towards left.

### 2. Brute Force Approach
- Initialize a variable `result` to `left`.
- Iterate from `left + 1` to `right`, updating `result = result & current_number` each time.
- This approach results in Time Limit Exceeded (TLE) for large ranges.