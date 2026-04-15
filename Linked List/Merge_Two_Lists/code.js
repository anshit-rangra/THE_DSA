
var mergeTwoLists = function(list1, list2) {

    let i = list1;
    let j = list2;

    let dummy = new ListNode(-1)
    let pointer = dummy;
    

    while(i !== null && j !== null){

        if(i.val < j.val){
            pointer.next = i;
            i = i.next;
        }
        else {
            pointer.next = j;
            j = j.next;
        }

        pointer = pointer.next;

    }

    while(i !== null){
        pointer.next = i;
        i = i.next;
        pointer = pointer.next
    }
       
       while(j !== null){
        pointer.next = j;
        j = j.next;
        pointer = pointer.next;
    } 
    

    return dummy.next;
    
};