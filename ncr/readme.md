# nCr (Binomial Coefficient)

This folder contains two JavaScript implementations to compute the binomial coefficient (nCr), which represents the number of ways to choose `r` elements from a set of `n` elements.

## Files

- `code.js`: Efficient iterative approach to calculate nCr without computing large factorials directly.
- `bruteforce.js`: Classic approach using recursive factorial calculation.

---

## code.js

**Efficient Iterative nCr Calculation**

- Uses the property: $nCr = n! / (r! (n-r)!)$
- Optimizes by minimizing the number of multiplications and divisions.
- Avoids large intermediate factorials by computing the result iteratively:
  - Chooses the smaller of `r` and `n-r` for fewer iterations.
  - Multiplies and divides in each step to keep numbers manageable.
- Returns 0 if $n < r$.
- Example usage:
  ```js
  const ans = nCr(5, 2); // Output: 10
  ```

---

## bruteforce.js

**Recursive Factorial-Based nCr Calculation**

- Defines a recursive `factorial(n)` function.
- Calculates nCr using the formula: $nCr = \frac{n!}{r!(n-r)!}$
- Uses `Math.floor` to ensure integer result.
- Less efficient for large `n` due to recursion and large intermediate values.
- Example usage:
  ```js
  const ans = nCr(5, 2); // Output: 10
  ```

---

## Notes
- The iterative approach in `code.js` is preferred for large values of `n` and `r` due to better performance and lower risk of integer overflow.
- The recursive approach in `bruteforce.js` is simple and easy to understand, but not suitable for large inputs.
- Both implementations assume `n` and `r` are non-negative integers.
