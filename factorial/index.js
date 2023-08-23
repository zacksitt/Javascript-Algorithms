function factorial(n){
    let result = 1;
   
    for (let index = n; index > 0; index--){
        result = index * result;
    }
    return result;
}

let fNum = factorial(3);
console.log("factorial number",fNum)

//Big(0) = O(n)