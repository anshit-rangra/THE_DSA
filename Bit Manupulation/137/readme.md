some rules of Bitwise
# Single Number II (LeetCode 137)

Find the element that appears exactly once in an array where every other element appears three times.

## Approach
Use two variables (`ones` and `twos`) to track the bits that have appeared once and twice:

1. For each number:
    - Update `ones` with: `ones = (ones ^ num) & ~twos`
    - Update `twos` with: `twos = (twos ^ num) & ~ones`
2. After processing all numbers, `ones` contains the unique element.

## Bitwise Rules Used
- `number & 0 = 0`
- `number & ~(number) = 0`
- `number ^ number = 0`
- `number ^ 0 = number`

## How the Buckets Work
- If a bit is not in `twos`, add it to `ones`.
- If a bit is already in `ones`, move it to `twos` and remove from `ones`.
- If a bit is already in `twos`, remove it from `twos` (appeared three times).

## Complexity
- Time: O(n)
- Space: O(1)