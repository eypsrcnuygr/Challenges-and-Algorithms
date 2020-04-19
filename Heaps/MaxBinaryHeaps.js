class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 17, 28, 12];
    }
    insert (val) {
        this.values.push(val);
        this.bubleUp();
    }
    bubleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element <= parent) {
                break;
            }
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    extractMax() {
        let rootElement = this.values[0];
        let lastElement = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = lastElement;  
            this.sinkDown();
        }
        return rootElement;
    }
    sinkDown () {
        let idx = 0;
        let length = this.values.length;
        let element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    } 
}

let heap = new MaxBinaryHeap();
console.log(heap);
heap.insert(55);
console.log(heap);
console.log(heap.extractMax())
console.log(heap);