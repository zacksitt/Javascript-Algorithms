function binarySearch(array,number){
   
    let leftIndex = 0;
    let rightIndex = array.length-1;

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)  / 2);
        if(array[middleIndex] == number){
            return middleIndex;
        }

        if(number < array[middleIndex]){
            rightIndex = middleIndex - 1;
        }else{
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5],5));
//Big-o = O(log(n))