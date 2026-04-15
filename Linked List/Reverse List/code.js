var reverseList = function(head) {

    if(head === null) return head

    let prev = null;
    let cur = head;

    while(cur !== null){

        let temp = cur.next

        console.log(`Prev => ${prev?.val} | Current => ${cur.val} | Next => ${temp?.val}`)

        cur.next = prev;

        prev = cur
        cur = temp
    }

    return prev
    
    
};