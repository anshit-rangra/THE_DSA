
# LeetCode 50: Pow(x, n)

## Problem
Implement the function to calculate $x^n$ (x raised to the power n).

## Approaches

### 1. Direct Approach
You can simply use the built-in operator: `x ** n`.

### 2. Optimal Approach (Logarithmic Time)
To achieve $O(\log n)$ time complexity, use the fast exponentiation (binary exponentiation) method:

- Initialize `result = 1` and use the absolute value of `n` as `power`.
- While `power > 0`:
	- If `power` is odd, multiply `result` by `x`.
	- Square `x` and divide `power` by 2 (integer division).
- If `n` is negative, return `1 / result`.

This approach efficiently computes the power by reducing the number of multiplications.