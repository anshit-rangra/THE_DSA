/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

    let slow = head
    fast = head;
    while(fast.next !== null && fast.next.next !== null){
        slow = slow.next;
        fast = fast.next.next ;
    }

    let prev = null;
    let cur = slow.next;

    while(cur !== null){
        let temp = cur.next;

        cur.next = prev
        prev = cur;
        cur = temp;
    }

    slow.next = prev

    slow = slow.next;
    
    while(slow !== null){

        if(slow.val !== head.val){
            return false;
        }

        slow = slow.next;
        head = head.next;

    }

    return true;
    
};