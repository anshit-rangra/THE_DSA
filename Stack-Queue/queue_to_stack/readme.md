
# Implementing Stack Using Queues

## Problem
Design a stack (LIFO) using only queue (FIFO) operations.

## Key Concepts
- **Stack:** Last-In-First-Out (LIFO)
- **Queue:** First-In-First-Out (FIFO)

## Allowed Operations
- For Queue: `.push()` (enqueue), `.shift()` (dequeue)
- For Stack: `.push()` (add to top), `.pop()` (remove from top)

## Approach (Using Two Queues)
1. **Initialization:**
	- Use two queues, `q1` and `q2`.

2. **Push Operation:**
	- Add the new element to the empty queue (`q2`).
	- Move all elements from the other queue (`q1`) to `q2` (this reverses the order).
	- Swap the names of `q1` and `q2` so that `q1` always contains the stack elements in correct order.

3. **Pop Operation:**
	- Remove the front element from `q1` (which is the top of the stack).

4. **Top Operation:**
	- Return the front element of `q1`.

## Pseudocode

```
push(x):
	 q2.push(x)
	 while q1 is not empty:
		  q2.push(q1.shift())
	 swap q1 and q2

pop():
	 return q1.shift()


	 return q1[0]
```

## Notes
- Only queue operations are used to simulate stack behavior.
- All stack operations are O(n) for push, O(1) for pop/top.


