class Heap{

    constructor(compaire=(a,b)=>(a>b)){
        this.heap=[];
        this.size=0;  
        this.compaire = compaire;
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


    #heapInsert(curr){
        let parent=this.getParent(curr)
        let arr = this.heap;

        while(parent>=0 && this.compaire(arr[curr],arr[parent])){
            [arr[parent],arr[curr]]=[arr[curr],arr[parent]];
            curr=parent;
            parent=this.getParent(curr);
        }
    }

    insert(val){
        this.heap.push(val);
        let curr = this.getSize();
        this.#heapInsert(curr)
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

    #getLeftChild(curr){
        return curr*2+1;
    }

    #getRightChild(curr){
        return curr*2+2;
    }


    #heapify(i){
        let curr=i;
        let l = this.#getLeftChild(curr);
        let r = this.#getRightChild(curr);
        let arr = this.heap;
        let n = this.getSize();
        let largest = i; // Initialize largest as root
    
 
    // If left child is larger than root
    if (l < n && this.compaire(arr[l],arr[largest]))
        largest = l;
 
    // If right child is larger than largest so far
    if (r < n && this.compaire(arr[r], arr[largest]))
        largest = r;
 
    // If largest is not root
    if (largest != i) {
        [arr[i], arr[largest]]=[ arr[largest],arr[i]];
        // Recursively heapify the affected sub-tree
        this.#heapify(largest);
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
        this.#heapify(0)

        return currVal;
    }
}

const heap = new Heap((a,b)=>a.age<b.age);

 const arr =[{'name':'sadab','age':20},{'name':'sadabs','age':22},{'name':'sadb','age':25},{'name':'saab','age':26}]
// const arr=[1,2,3,4,5]
arr.forEach(curr=>{
    heap.insert(curr);
})


console.log(heap.delete())
console.log(heap.delete())
console.log(heap.delete())
console.log(heap.delete())
