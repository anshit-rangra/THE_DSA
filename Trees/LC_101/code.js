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
 * @return {boolean}
 */

function symt(p, q){

    if(p === null && q === null) return true;



    if( (p !== null && q === null) || (p === null && q !== null) ) return false;

    if(p.val === q.val){

        let left = symt(p.left, q.right)
        let right = symt(p.right, q.left)

        return left && right
    }

    return false;

}

var isSymmetric = function(root) {

    if(root === null) return true;

    let ans = symt(root.left, root.right)

    return ans;
    
};