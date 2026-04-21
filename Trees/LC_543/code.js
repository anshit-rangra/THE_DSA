/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */



var diameterOfBinaryTree = function(root) {

    let ans = 0;
    const solve = (root) => {

        if(root === null) return 0;

        const left = solve(root.left)
        const right = solve(root.right)

        ans = Math.max(ans, left+right)
        let max = Math.max(left, right) + 1
        

        return max;

    }

    solve(root)

    return ans;
    
};