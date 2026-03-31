
# Prime Numbers: Sieve of Eratosthenes

This JavaScript implementation finds all prime numbers up to a given number `n` using the Sieve of Eratosthenes algorithm.

## How it Works

1. **Initialization:**
	- Create a boolean array `isPrime` of size `n + 1` and set all values to `true`.
	- Set `isPrime[0]` and `isPrime[1]` to `false` (0 and 1 are not prime).

2. **Mark Non-Primes:**
	- For each number `i` from 2 up to `n`:
	  - If `isPrime[i]` is `true`, mark all multiples of `i` (starting from `i * i`) as `false` (not prime).

3. **Collect Primes:**
	- Iterate through the `isPrime` array and collect all indices where the value is `true` (these are the prime numbers).

## Example

```js
console.log(prime(9)); // Output: [2, 3, 5, 7]
```

## Time Complexity
- The Sieve of Eratosthenes runs in $O(n \log \log n)$ time.

## Usage
- Call the `prime(n)` function with any positive integer `n` to get all primes up to `n`.
