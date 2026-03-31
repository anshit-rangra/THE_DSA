# Hamming Distance (LeetCode 461)

Compute the number of differing bit positions between two non-negative integers.

## Idea
- XOR highlights differing bits: a ^ b has 1s wherever the bits differ.
- Count the 1-bits in the XOR result by checking the least significant bit and shifting.

## Walkthrough
Example: x = 1 (001), y = 4 (100)

1 ^ 4 = 5 (101)
101 & 1 = 1  → count = 1
101 >> 1 = 10 (010)
010 & 1 = 0  → count = 1
010 >> 1 = 1 (001)
001 & 1 = 1  → count = 2 (distance)

## Complexity
- Time: O(k) where k is bit-width (for 32-bit ints, O(1))
- Space: O(1)

