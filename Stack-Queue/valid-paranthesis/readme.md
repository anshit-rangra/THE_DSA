
# Valid Parentheses — Optimal Approach

## Problem
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:
- Open brackets are closed by the same type of brackets.
- Open brackets are closed in the correct order.

## Optimal Solution

The optimal approach uses a **stack** and a **hashmap**:

1. **Hashmap**: Map each closing bracket to its corresponding opening bracket.
   - Example: `{ ')': '(', ']': '[', '}': '{' }`
2. **Stack**: Iterate through the string:
   - If the character is an opening bracket, push it onto the stack.
   - If it is a closing bracket, check if the stack is not empty and the top of the stack matches the corresponding opening bracket from the hashmap.
	 - If it matches, pop the stack.
	 - If it doesn't match or the stack is empty, the string is invalid.
3. At the end, the stack should be empty for the string to be valid.

## Pseudocode

```
let stack = []
let map = { ')': '(', ']': '[', '}': '{' }
for char in string:
	if char in map.values():
		stack.push(char)
	else if char in map:
		if stack is empty or stack.pop() != map[char]:
			return false
return stack is empty
```

## Example

Input: `"{[()]}"`
Output: `true`

Input: `"([)]"`
Output: `false`

## Time Complexity
O(n), where n is the length of the string.