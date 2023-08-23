function quickSort(arr){
    
    if(arr.length < 2){
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let left  = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {
        if(i < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i])
        }        
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([1,4,2,-2,4]))

// worst case O(n^2)
// average case O(nlogn)