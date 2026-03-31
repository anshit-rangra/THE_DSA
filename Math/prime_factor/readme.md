


# Prime Factorization

This JavaScript function finds all prime factors of a given number `n`.

## How it Works

1. Start with `i = 2` (the smallest prime).
2. While `i` is less than or equal to `n / 2`:
	- While `n` is divisible by `i`, add `i` to the result array and divide `n` by `i`.
	- Increment `i`.
3. Return the array of prime factors.

## Example

```js
console.log(primeFactor(18)); // Output: [2, 3, 3]
```

## Note
- The condition `i <= n/2` can be optimized to `i * i <= n` for better performance.