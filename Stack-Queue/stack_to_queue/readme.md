# Implementing Queue Using Stacks

## Problem
Design a queue (FIFO) using only stack (LIFO) operations.

## Key Concepts
- **Queue:** First-In-First-Out (FIFO)
- **Stack:** Last-In-First-Out (LIFO)

## Allowed Operations
- For Stack: `.push()` (add to top), `.pop()` (remove from top)

## Approach (Using Two Stacks)
Use two stacks:
- `inputStack`: For enqueue operations
- `outputStack`: For dequeue operations

### Push Operation (Enqueue)
- Push the element onto `inputStack`.

### Pop Operation (Dequeue)
- If `outputStack` is not empty, pop from `outputStack`.
- If `outputStack` is empty:
  - Pop all elements from `inputStack` and push them onto `outputStack` (this reverses the order).
  - Pop from `outputStack`.

### Peek Operation (Front)
- If `outputStack` is not empty, return the top element of `outputStack`.
- If `outputStack` is empty:
  - Move all elements from `inputStack` to `outputStack` as above.
  - Return the top element of `outputStack`.

## Pseudocode

```
push(x):
    inputStack.push(x)

pop():
    if outputStack is empty:
        while inputStack is not empty:
            outputStack.push(inputStack.pop())
    return outputStack.pop()

peek():
    if outputStack is empty:
        while inputStack is not empty:
            outputStack.push(inputStack.pop())
    return outputStack[outputStack.length - 1]
```

## Notes
- This approach ensures that each element is moved at most once between stacks, so all operations are amortized O(1).