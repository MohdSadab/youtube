class TrieNode{
    constructor(no_of_childrens=26,is_end_of_word=false){
        this.child= (new Array(no_of_childrens)).map(curr=>null);
        this.is_end_of_word=is_end_of_word;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
    }

    getIndex(char){
        // a=>0,b=>1
        return char.charCodeAt(0)-97;
    }

    is_present(curr,char){
        let idx= this.getIndex(char);
        return curr.child[idx];
    }

    getNode(){
        return new TrieNode()
    }

    insert(word){
        let curr = this.root;
        for(let i=0;i<word.length;i++){
            let idx= this.getIndex(word[i]);
            if(!this.is_present(curr,word[i])){
                curr.child[idx]=this.getNode();
            }
            curr= curr.child[idx]
        }
        curr.is_end_of_word=true;
    }

    search(word){
        let curr = this.root;
        for(let val of word){
            let idx= this.getIndex(val);
            if(!this.is_present(curr,val)){
                return null;
            }
            curr=curr.child[idx];
        }
        return curr;
    }


    startsWithRec(curr,word){
        if(curr.is_end_of_word){
            console.log(word);
        }
        let len=curr.child.length
        for(let i=0;i<len;i++){
            if(curr.child[i]){
                this.startsWithRec(curr.child[i],word+String.fromCharCode(i+97))
            }
        }
    }

    startsWith(word){
        let curr = this.search(word);
        if(!curr){
            return []
        }

        this.startsWithRec(curr,word);
    }

}

const arr=["ab","aab","aba","abab","baa","bac"];
const trie = new Trie();
for(let val of arr){
    trie.insert(val);
}

trie.startsWith("a");