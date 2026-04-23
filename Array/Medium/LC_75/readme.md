## LC 75: Sort Colors (Dutch National Flag Problem)

This problem can be solved using two approaches:

### 1. Brute Force Approach
- Use any standard sorting algorithm (e.g., bubble sort, selection sort).
- Time Complexity: $O(n \log n)$ or worse, depending on the algorithm.
- Space Complexity: Depends on the sorting method.

### 2. Optimal Approach (Two/Three Pointer Algorithm)
- Use three pointers to sort the array in a single pass.
- Time Complexity: $O(n)$
- Space Complexity: $O(1)$
- The idea:
	- Maintain three pointers: `low`, `mid`, and `high`.
	- Traverse the array with `mid`.
	- If the current element is the first value (e.g., 0), swap it with `low` and increment both `low` and `mid`.
	- If it is the last value (e.g., 2), swap it with `high` and decrement `high`.
	- If it is the middle value (e.g., 1), just increment `mid`.
- This ensures all elements are placed in their correct positions efficiently.

---

Let me know if you want to add an example or further explanation!