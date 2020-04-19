//It is a FIFO method be carefull;

class node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class queue {
    constructor () {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueu (val) {
        var newNode = new node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode
        }
        return this.size++
    }
    dequeue () {
        if (!this.first) {
            return null;
        }
        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--
        return temp.val
    }
}

var list = new queue();
list.enqueu('Sercan');
list.enqueu('UYGUR');
list.enqueu('Can do it');
list.dequeue();
console.log(list);