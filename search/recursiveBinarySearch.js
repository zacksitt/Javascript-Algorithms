function recursiveBinarySearch(arr,target){
    return search(arr,target,0,arr.length -1)
}

function search(arr,target,leftIndex,rightIndex){

    if(leftIndex > rightIndex){
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if(arr[middleIndex] === target){
        return middleIndex;
    }

    if(target < arr[middleIndex]){
        return search(arr,target,leftIndex,middleIndex-1);
    }else{
        return search(arr,target,middleIndex + 1,rightIndex);
    }
}

console.log(recursiveBinarySearch([1,2,3,4,5],5));

//Big(0) = O(log(n))