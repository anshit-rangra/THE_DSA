
# Check if a Number is Prime

This JavaScript function determines whether a given number `n` is a prime number.

## How it Works

1. Assume the number is prime.
2. Loop from 2 up to `n/2` (exclusive):
	- If `n` is divisible by any number in this range, set the flag to false and break the loop.
3. Return "Is Prime" if the number is prime, otherwise return "Is not Prime".

## Example

```js
console.log(isPrime(15)); // Output: "Is not Prime"
console.log(isPrime(7));  // Output: "Is Prime"
```

## Note
- This is a basic approach and works well for small numbers. For large numbers, more efficient algorithms are recommended.
