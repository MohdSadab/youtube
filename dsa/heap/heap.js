class Heap{

    constructor(){
        this.heap=[];
        this.size=0;  
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size;
    }


    getParent(curr){
        return Math.ceil(curr/2)-1
    }


    insertInMax(curr){
        let parent=this.getParent(curr)
        let arr = this.heap;
        while(parent>=0 && arr[parent]<arr[curr]){
            [arr[parent],arr[curr]]=[arr[curr],arr[parent]];
            curr=parent;
            parent=this.getParent(curr);
        }
    }

    insert(val){
        this.heap.push(val);
        let curr = this.getSize();
        this.insertInMax(curr)
        this.size++;
    }


    getMin(){
        if(this.size)
            return this.heap[0];
        throw Error('Heap is empty')
    }

    getMax(){
        if(this.size)
            return this.heap[0];
        throw Error('Heap is empty')
    }

    getLeftChild(curr){
        return curr*2+1;
    }

    getRightChild(curr){
        return curr*2+2;
    }


    heapifyMaxHeap(i){
        let curr=i;
        let l = this.getLeftChild(curr);
        let r = this.getRightChild(curr);
        let arr = this.heap;
        let n = this.getSize();
        let largest = i; // Initialize largest as root

        if(l<n && arr[l]>arr[largest]){
            largest=l;
        }
        if(r<n && arr[r]>arr[largest]){
            largest=r;
        }
        if(largest!=curr){
            [arr[curr],arr[largest]]=[arr[largest],arr[curr]];
            this.heapifyMaxHeap(largest);
        }
    
    }


    delete(){
        if(this.isEmpty()){
            throw Error('Heap is empty')
        }
        let currVal = this.heap[0];
        this.heap[0]=this.heap[this.getSize()-1];
        this.heap.pop();
        this.size--;
        this.heapifyMaxHeap(0);
        

        return currVal;
    }
}

const heap = new Heap();
heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.insert(4);


console.log(heap.delete())
console.log(heap.delete())
console.log(heap.delete())
console.log(heap.delete())
