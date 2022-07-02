class HashTable{
    constructor(size){
        this.hashTable= (new Array(size).fill(0).map(curr=>[-1,-1]));
        this.size=0;
    }

    hashFunction(key){
        return key%this.hashTable.length
    }

    findNextKey(key,value=-1){
        let currKey =key;
        let count=0
       
        while(this.hashTable[currKey][0]!==value && count!==this.hashTable.length){
            currKey=(currKey+1)%this.hashTable.length;
            count++;
        }
        if(count===this.hashTable.length){
            return -1;
        }

        return currKey;
    }
    insert(key,value){
        let hashKey = this.hashFunction(key);
        if(this.hashTable[hashKey][0]!==-1 && this.hashTable[hashKey][0]!==key){
            hashKey = this.findNextKey(hashKey);
            if(hashKey===-1){
                throw new Error("Can't insert hash is full");
            }
        }
        this.hashTable[hashKey][0]=key;
        this.hashTable[hashKey][1]=value;
        this.size++;
    }

    remove(key){
        let hashKey = this.hashFunction(key);
        if(this.hashTable[hashKey][0]!==key){
            hashKey = this.findNextKey(hashKey,key);
            if(hashKey===-1){
               return;
            }
        }
        this.hashTable[hashKey][0]=-1;
        this.hashTable[hashKey][1]=-1;
        this.size = Math.max(this.size-1,0);
    }

    getSize(){
        return this.size;
    }

    get(key){
        let hashKey = this.hashFunction(key);
        if(this.hashTable[hashKey][0]!==-1 && this.hashTable[hashKey][0]!==key){
            hashKey = this.findNextKey(hashKey,key);
            if(hashKey===-1){
                return;
            }
        }
        let val = this.hashTable[hashKey][1];
        if(val!==-1){
            return val;
        }
    }
}

const ht = new HashTable(10);
ht.insert(5,1);
ht.insert(10,2);
ht.insert(11,5);
ht.insert(12,7);
ht.insert(15,23);
console.log(ht.get(15))