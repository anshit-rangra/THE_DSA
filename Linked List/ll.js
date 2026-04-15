
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {

    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertAtFirst(val){

        this.size++;
        let newNode = new Node(val)


        if(this.head !== null){
            newNode.next = this.head;
            this.head = newNode;
        } else {

            this.head = newNode;
        }


    }

    insertAtLast(val){

        this.size++;
        let newNode = new Node(val);

        if(this.head === null){
            this.head = newNode;
            return;
        } 

        let temp = this.head;
        
        while(temp.next !== null){
            temp = temp.next;
        }
        temp.next = newNode;
    }

    deleteAtFirst(){

        if(this.head === null){
            return;
        }

        this.head = this.head.next;
        this.size--;
    }

    deleteAtLast(){

        if(this.head === null){
            return;
        }

        let temp = this.head;
        while(temp.next && temp.next.next !== null){
            temp = temp.next;
        }
        temp.next = null;

        this.size--;

    }

    insertAtIndex(val, index){
        
        if(index < 0 || index > this.size){
            console.log("Not possible")
            return
        }

        this.size++;
        let newNode = new Node(val)
        if(this.head === null){
            this.head = newNode;
            return
        }

        let temp = this.head;
        for(let i = 0; i<index-1; i++){
            temp = temp.next;
            }

        
            newNode.next = temp.next;

            temp.next = newNode

    }

    printll(){

        if(this.head === null){
            console.log("Empty list")
            return;
        }

        let temp = this.head;

        while(temp !== null){
            process.stdout.write(`${temp.val} --> `)
            temp = temp.next;
        }

        process.stdout.write("null")
        console.log()
    }
    
}

let list = new LinkedList();

list.insertAtFirst(10)
list.insertAtFirst(20)
list.insertAtFirst(30)
list.insertAtLast(100)

list.printll();

list.deleteAtFirst();

list.printll();