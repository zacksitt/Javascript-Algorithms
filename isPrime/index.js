function isPrime(n){

    if(n < 2){
        return false;
    }
    for (let index = 2; index <= Math.sqrt(n); index++) {
        console.log(index);

        if(n%index == 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(1))
console.log(isPrime(5))
console.log(isPrime(35))

//Big(o) = n(sqrt(o))