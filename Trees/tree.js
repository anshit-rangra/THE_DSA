const prompt = require("prompt-sync")();

class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Tree {

    buildTree () {

        const value = prompt("Enter the value = ")
        
        if(value == -1) return null;

        let root = new Node(value)

        console.log("Enter the value of left of " + value)
        root.left = this.buildTree()

        console.log("Enter the value of right of " + value)
        root.right = this.buildTree()

        return root;

    }

    preorderPrint(root){


        if(root === null) return

        process.stdout.write(`${root.val} --> `)

        this.preorderPrint(root.left)
        this.preorderPrint(root.right)

    }

    postorderPrint(root){

        if(root === null) return
        
        this.postorderPrint(root.left)
        this.postorderPrint(root.right)
        process.stdout.write(`${root.val} --> `)

    }

    inorderPrint(root){

        if(root === null) return


        this.inorderPrint(root.left)
        
        process.stdout.write(`${root.val} --> `)
        this.inorderPrint(root.right)

    }

}


const tree = new Tree()

let root = tree.buildTree()

console.log()

tree.preorderPrint(root)

console.log()

tree.inorderPrint(root)

console.log()

tree.postorderPrint(root)