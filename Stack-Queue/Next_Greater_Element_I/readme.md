and then check if current element is greater that top of stack if yes then in map we add the stack element as key and current element as value and pop the item from the stack 

# Next Greater Element I

Given two arrays, for each element in the first array, find the next greater element in the second array. If it does not exist, return -1 for that element.

## Brute Force Approach

1. For each element in `nums1`, find its index in `nums2`.
2. From that index, iterate through the rest of `nums2` to find the first element greater than the current element.
3. If found, add it to the answer; otherwise, add -1.

**Time Complexity:** O(N*M), where N is the length of `nums1` and M is the length of `nums2`.

**Pseudo-code:**
```js
for each num in nums1:
	find index of num in nums2
	for j = index+1 to end of nums2:
		if nums2[j] > num:
			answer = nums2[j]
			break
	if not found:
		answer = -1
```

---

## Optimal Approach (Using Stack)

1. Use a stack to keep track of elements for which we haven't found the next greater element yet.
2. Iterate through `nums2`:
	- While the stack is not empty and the current element is greater than the top of the stack, pop from the stack and map the popped element to the current element (as its next greater).
	- Push the current element onto the stack.
3. After the loop, for any elements left in the stack, map them to -1 (no next greater element).
4. Build the answer for `nums1` using the map.

**Time Complexity:** O(N + M), where N is the length of `nums1` and M is the length of `nums2`.

**Pseudo-code:**
```js
stack = []
map = {}
for num in nums2:
	while stack not empty and num > stack.top():
		map[stack.pop()] = num
	stack.push(num)
while stack not empty:
	map[stack.pop()] = -1
for num in nums1:
	answer.append(map[num])
```