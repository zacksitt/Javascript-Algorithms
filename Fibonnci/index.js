function findFibonacciSequences(n){

    let seqs = [0,1];
    
    for (let index = 2; index < n; index++) {
        if(index >= 2){
            seqs[index] = seqs[index -1] + seqs[index-2];
        }
    }

    return seqs;
}

let result = findFibonacciSequences(7);
console.log("res",result);

//Big(o) = O(n)