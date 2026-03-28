# Majority Element (LeetCode 169)

Find the element that appears more than ⌊n/2⌋ times in an array (the majority element).

## Approach: Moore's Voting Algorithm
- Maintains a candidate and a count.
- If count is 0, set candidate to current element and count to 1.
- If current element equals candidate, increment count.
- Otherwise, decrement count.
- At the end, candidate is the majority element (guaranteed by problem constraints).

## Example
nums = [2,2,1,1,1,2,2]

| Step | Candidate | Count |
|------|-----------|-------|
|  2   |     2     |   1   |
|  2   |     2     |   2   |
|  1   |     2     |   1   |
|  1   |     2     |   0   |
|  1   |     1     |   1   |
|  2   |     1     |   0   |
|  2   |     2     |   1   |

## Complexity
- Time: O(n)
- Space: O(1)