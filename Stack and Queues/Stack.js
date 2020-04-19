//Burada push ve pop metodları yazacağız ancak bunlar normalin aksine listenin ilk sırasındaki 
//itemları silecek.Bu LIFO metodunca uygulamaya örnek.

class node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class stack {
    constructor () {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) {
            return null;
        }
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}


var Stack = new stack();
Stack.push('Öğreniyorum');
Stack.push('Başaracağım')
Stack.push('Hızlanacağım');
Stack.pop();
console.log(Stack);
