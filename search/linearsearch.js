function linearSearch(array,number){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element === number){
            return index;
        }
    }
    return -1;
}

console.log(linearSearch([1,2,3,4,5],2));
//Big-o = O(n)