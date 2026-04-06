## Wave Form Array - Optimal Approach

### Problem Statement
Given an array, rearrange the elements into a wave form such that:

	arr[0] <= arr[1] >= arr[2] <= arr[3] >= arr[4] ...

### Optimal Approach
1. **Sort the array** first.
2. Iterate through the array, and for every even index `i`, swap `arr[i]` and `arr[i+1]` (if `i+1` is within bounds).

This ensures the wave form property: each even-indexed element is less than or equal to the next, and each odd-indexed element is greater than or equal to the next.

#### Pseudocode
```
sort(arr)
for i from 0 to n-2 step 2:
	swap(arr[i], arr[i+1])
```

### Key Points
- Sorting is essential for the optimal approach.
- The iterator (index) is important; swap elements at every even index with the next element.
- This guarantees the required wave pattern efficiently.