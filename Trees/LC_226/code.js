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
 * @return {TreeNode}
 */

function symt(root){

    if(root === null) return

    let temp = root.left
    root.left = root.right
    root.right = temp

    symt(root.left)
    symt(root.right)

}

var invertTree = function(root) {
    

    symt(root)

    return root;

};