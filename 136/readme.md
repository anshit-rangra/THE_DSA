# Single Number (LeetCode 136)

Find the element that appears exactly once in an array where every other element appears twice.

## Idea
- Use bitwise XOR: a ^ a = 0, a ^ 0 = a, and XOR is commutative/associative, so duplicates cancel out.
- XOR all numbers; the leftover value is the unique element.

## Walkthrough
Example nums = [4, 1, 2, 1, 2]

- 0 ^ 4 = 4
- 4 ^ 1 = 5
- 5 ^ 2 = 7
- 7 ^ 1 = 6
- 6 ^ 2 = 4  (unique number)

## Complexity
- Time: O(n)
- Space: O(1)
