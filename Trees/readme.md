# Trees: An Overview

A **tree** is a fundamental non-linear data structure consisting of nodes connected by edges. Unlike arrays, linked lists, or other linear structures, trees represent hierarchical relationships.

## Key Properties
- **Root:** The topmost node in a tree.
- **Parent/Child:** Each node (except the root) has a parent; nodes may have zero or more children.
- **Leaf:** A node with no children.
- **Edge:** The connection between two nodes.
- **Height:** The length of the longest path from the root to a leaf.
- **Depth:** The length of the path from the root to a given node.

## Tree Traversals
Traversal means visiting all the nodes in a specific order. The most common tree traversal technique is **Depth First Search (DFS)**, which explores as far as possible along each branch before backtracking.

### Types of DFS Traversals

1. **Preorder Traversal (DLR)**
	- Visit the current node (Data)
	- Traverse the left subtree (Left)
	- Traverse the right subtree (Right)
	- **Order:** Data → Left → Right

2. **Inorder Traversal (LDR)**
	- Traverse the left subtree (Left)
	- Visit the current node (Data)
	- Traverse the right subtree (Right)
	- **Order:** Left → Data → Right

3. **Postorder Traversal (LRD)**
	- Traverse the left subtree (Left)
	- Traverse the right subtree (Right)
	- Visit the current node (Data)
	- **Order:** Left → Right → Data

## Example

Given the following binary tree:

```
	 1
	/ \
  2   3
 / \
4   5
```

- **Preorder:** 1, 2, 4, 5, 3
- **Inorder:** 4, 2, 5, 1, 3
- **Postorder:** 4, 5, 2, 3, 1

---

Trees are widely used in computer science for representing hierarchical data, such as file systems, organizational structures, and more.