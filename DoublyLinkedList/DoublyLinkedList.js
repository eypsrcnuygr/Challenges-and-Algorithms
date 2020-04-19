class node {
    constructor (val) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}
class doublyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push (val) {
        var newNode = new node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }

        else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        } 
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } 
        else {
            this.tail = poppedNode.previous;
            this.tail.next = null;
            poppedNode.previous = null;
        }
        this.length--;
        return poppedNode;
    }
    shift () {
        if (!this.head) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            var currentHead = this.head;
            this.head = currentHead.next;
            this.head.previous = null;
        }
        this.length--
        return currentHead;
    }
    unshift (val) {
        var newNode = new node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.previous = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++
        return this
    }
    get (index) {
        var count, current;
        if (index < 0 || index >= this.length) {
            return null;
        }
        if (index <= this.length/2) {
            count = 0;
            current = this.head;
            while (index !== count) {
                count++;
                current = current.next;
            }
        }
        else {
            count = this.length - 1;
            current = this.tail;
            while (index !== count) {
                count --;
                current = current.previous;
            }
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert (index, value) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) {
            this.push(value);
            return false;
        }
        if(index === 0) return !!this.unshift(value);
        var justBefore = this.get(index - 1);
        var theChangedOne = this.get(index);
        var newNode = new node(value);
        justBefore.next = newNode;
        newNode.previous = justBefore;
        newNode.next = theChangedOne;
        theChangedOne.previous = newNode;
        this.length++;
        return true;
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
        var justAfter = justBefore.next.next;
        var removedItem = justBefore.next;
        justBefore.next = justAfter;
        justAfter.previous = justBefore;
        removedItem.next = null;
        removedItem.previous = null;
        this.length--;
        return removedItem;
    }
        
}

var list = new doublyLinkedList();

list.push('Sercan');
list.push('UYGUR');
list.push('garip');
list.push('acayip');
list.set(0, 'bulamadım')
list.insert(1,'Özledim')
console.log(list.remove(1));
console.log(list);