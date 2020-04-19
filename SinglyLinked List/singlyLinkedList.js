// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
       var newNode = new Node(val);
       if (!this.head) {
           this.head = newNode;
           this.tail = this.head;
       }
       else {
        this.tail.next = newNode;
        this.tail = newNode;
       }
       this.length++;
       return this;
    }

    pop () {
        if (!this.head) {
            return undefined;
        }
        var current = this.head;
        var newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift () {
        if (!this.head) {
            return undefined;
        }
        var currentHead = this.head;
        this.head = this.head.next;
        this.length--
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead; 
    }
    unShift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set (index, value) {
        const foundOne = this.get(index) 
        if (foundOne === null) {
            return false;
        }
        foundOne.val = value;
        return true;
    }
    insert (index, value) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) {
            this.push(value);
            return false;
        }
        if(index === 0) return !!this.unShift(value);

        var justBefore = this.get(index - 1);
        var theChangedOne = this.get(index);
        var newNode = new Node(value);
        justBefore.next = newNode;
        newNode.next = theChangedOne;
        this.length++
        return true
    }
    remove (index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index === this.length -1) {
            return this.pop()
        }
        if( index === 0) {
            return this.shift()
        }
        var justBefore = this.get(index - 1);
        var theAfterOne = this.get(index + 1);
        var theDeletedOne = this.get(index);
        justBefore.next = theAfterOne;
        this.length--;
        return theDeletedOne;
    }
    reverse(){
        var current = this.head;
        this.head = this.tail;
        this.tail = current;
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++){
          next = current.next;
          current.next = prev;
          prev = current;
          current = next;
        }
        return this;
      }
    
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("I");
list.push("am");
list.push("Sercan"); 
list.push("and");
list.push("I");
list.push("love");
list.push("Merve");

console.log(list);
var list2 = list.reverse();
console.log(list2);

