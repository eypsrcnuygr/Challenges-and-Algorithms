class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarSearchTree {
    constructor () {
        this.root = null;
        return this;
    }
    insert (value) {
        var newNode = new Node(value)
        if (!this.root) {
            this.root = newNode;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find (value) {
        if (!this.root) {
            return false;
        } 
        var current = this.root;
        var currentVal = current.value 
        var found = false;
        if (value === this.root.value) {
            found = !found
            return current;
        }
        while (!found) {
            if (value > currentVal) {         
                if (!current.right) {
                    return false
                }
                else if (current.right) {
                    current = current.right;
                    currentVal = current.value;
                }
                if (currentVal === value) {
                    found = !found;
                    return current;
                }  
            }
            else if (value < currentVal) {
                if (!current.left) {
                    return false;
                }
                else if (current.left) {
                    current = current.left;
                    currentVal = current.value;
                }
                if (currentVal === value) {
                    found = !found;
                    return current;
                } 
            }
        }
    }
}

var tree = new BinarSearchTree();

tree.insert(25);
tree.insert(18);
tree.insert(15);
tree.insert(16);
tree.insert(29);
tree.insert(19);
tree.insert(123);
tree.insert(199);
tree.insert(195);
tree.insert(5);
tree.insert(30);
tree.insert(49);
tree.insert(55);
tree.insert(129);
tree.insert(177);
tree.insert(87);
tree.insert(8);
var findOne = tree.find(25);
console.log(findOne);
