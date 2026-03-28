# Single Number II (LeetCode 137)

Find the element that appears exactly once in an array where every other element appears three times.

## Approach
- Use bitwise logic with two variables to track bits seen once and twice.
- For each number:
	- Update `ones` and `twos` using:
		- `ones = (ones ^ num) & ~twos`
		- `twos = (twos ^ num) & ~ones`
- At the end, `ones` holds the unique number.

## Complexity
- Time: O(n)
- Space: O(1)