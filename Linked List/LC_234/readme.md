


# LC 234: Palindrome Linked List

This problem asks whether a singly linked list is a palindrome (reads the same forwards and backwards).

## Brute-force Approach

**Idea:**
Convert the linked list into an array, then use the two-pointer technique to check if the array is a palindrome.

**Steps:**
1. Traverse the linked list and store each node's value in an array.
2. Use two pointers (`i` at the start, `j` at the end) to compare values:
	- If `arr[i] !== arr[j]`, return `false` (not a palindrome).
	- Move `i` forward and `j` backward until they meet or cross.
3. If all values match, return `true`.

**Time Complexity:** $O(n)$ (for traversing the list and checking the array)

**Space Complexity:** $O(n)$ (for the array)

**Code Reference:** See [bruteforce.js](bruteforce.js)

---

## Optimal Approach (O(1) Space)

**Idea:**
Use the fast and slow pointer technique to find the middle of the list, reverse the second half, and compare both halves node by node.

**Steps:**
1. **Find the Middle:**
	- Use two pointers: `slow` moves one step, `fast` moves two steps.
	- When `fast` reaches the end, `slow` will be at the middle.
2. **Reverse the Second Half:**
	- Reverse the list starting from `slow.next`.
3. **Compare Both Halves:**
	- Compare nodes from the start and from the reversed second half.
	- If any values differ, return `false`.
	- If all match, return `true`.

**Time Complexity:** $O(n)$

**Space Complexity:** $O(1)$ (in-place reversal)

**Code Reference:** See [code.js](code.js)

---

## Example

Input: `1 -> 2 -> 2 -> 1`

- Brute-force: Array becomes `[1, 2, 2, 1]` → palindrome.
- Optimal: After finding the middle and reversing, compare both halves → palindrome.

---

## Notes
- The brute-force approach is easier to implement but uses extra space.
- The optimal approach is more space-efficient and demonstrates classic linked list techniques (fast/slow pointers, in-place reversal).